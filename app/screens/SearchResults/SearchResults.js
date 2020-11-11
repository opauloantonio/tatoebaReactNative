import React, { useState, useEffect } from 'react';

import { View, Text, FlatList } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';

import SentenceContainer from '../../components/SentenceContainer';

import axios from 'axios';

import api from '../../api';

const SearchResults = props => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    numberOfResults: "",
    sentences: [],
  });

  const [page, setPage] = useState(1);

  const fetchSentences = () => {
    const {from, to, text} = props.route.params;

    axios.post(
      api.search, 
      { from, to, text, page: page.toString() },
      { 'Content-Type': 'application/json', }
    ).then(res => {
      setData(res.data);
      setError(false);
      setLoading(false);
      setPage(page + 1)
    }).catch((e) => {
      setError(true);
      setLoading(false);
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>error</Text>
      </View>
    );
  } else {
    return(
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text style={{textAlign: 'center', marginVertical: 10}}>
          {data.numberOfResults}
        </Text>

        <FlatList 
          renderItem={({ item }) => <SentenceContainer sentence={item} />}
          keyExtractor={(item) => item.id.toString()}
          data={data.sentences}
        />
      </View>
    );
  }
}

export default SearchResults;
