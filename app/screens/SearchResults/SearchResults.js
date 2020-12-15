import React, { useState, useEffect } from 'react';

import { View, Text, FlatList } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';

import SentenceContainer from '../../components/SentenceContainer';

import Error from '../../components/Error';

import axios from 'axios';

import api from '../../api';

const SearchResults = props => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [endOfSearch, setEndOfSearch] = useState(false);
  const [page, setPage] = useState(1);

  const [data, setData] = useState({
    numberOfResults: "",
    sentences: [],
  });

  const fetchSentences = () => {
    if (loadingMore) {
      return;
    }

    if (page > 1 && endOfSearch) {
      return;
    }

    const {from, to, text} = props.route.params;

    if (page === 1) {
      setLoading(true);
      setLoadingMore(false);
    } else {
      setLoadingMore(true);
    }

    setError(false);

    axios.post(
      api.search, 
      { from, to, text, page: page.toString() },
      { 'Content-Type': 'application/json', }
    ).then(res => {
      setData({
        numberOfResults: res.data.numberOfResults,
        sentences: [...data.sentences, ...res.data.sentences]
      });
      setError(false);
      setLoading(false);
      setLoadingMore(false);

      if (res.data.sentences.length <= 9) {
        setEndOfSearch(true);
      }

      setPage(page + 1);
    }).catch((e) => {
      setError(true);
      setLoading(false);
      setLoadingMore(false);
      console.log(e)
    });
  }

  
  useEffect(() => {
    fetchSentences();
  }, [props.route.params]);

  if (loading) {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={true} />
      </View>
    );
  } else if (error) {
    return(
      <Error 
        message="There was an error while trying to fetch your search results"
        retry={fetchSentences}
      />
    );
  } else {
    return(
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text style={{textAlign: 'center', marginVertical: 10}}>
          {data.numberOfResults}
        </Text>

        <FlatList 
          renderItem={({ item }) => <SentenceContainer sentence={item} navigation={props.navigation} />}
          keyExtractor={(item) => item.id.toString()}
          data={data.sentences}
          onEndReached={fetchSentences}
          onEndReachedThreshold={0.1}
        />

        {loadingMore &&
        <View style={{
          paddingTop: 10,
          paddingBottom: 20,
        }}>
          <ActivityIndicator animating={true} />
        </View>
        }
      </View>
    );
  }
}

export default SearchResults;
