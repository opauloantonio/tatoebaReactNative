import React, { useState, useEffect } from 'react';

import { ScrollView, View, StyleSheet, FlatList } from 'react-native';

import { ActivityIndicator, Divider, Headline } from 'react-native-paper';

import SentenceContainer from '../../components/SentenceContainer';

import Comment from '../../components/Comment';

import axios from 'axios';

import api from '../../api';
import useTheme from '../../utils/useTheme';

const SentenceDetails = props => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [data, setData] = useState({});

  const theme = useTheme();

  const loadSentence = () => {
    setLoading(true);
    setError(false);

    axios.get(`${api.sentence}${props.route.params.id}/`).then(res => {
      setData(res.data);
      setError(false);
      setLoading(false);
    }).catch(err => {
      console.log(err);
      setError(true);
      setLoading(false);
    })
  }

  useEffect(() => {
    loadSentence();
  }, [props.route.params.id])

  if (loading) {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={true} />
      </View>
    );
  } else if (error) {
    return(
      <Error 
        message="There was an error while trying to fetch the sentence"
        retry={loadSentence}
      />
    );
  } else {
    return(
      <ScrollView style={{flex: 1, marginHorizontal: 10}}>
        <View style={{...styles.container, backgroundColor: theme === "dark" ? "#212121" : "white"}}>
          <SentenceContainer 
            sentence={data.sentence} 
            navigation={props.navigation}
          />
        </View>

        <Divider style={{marginTop: 10}} />

        <View>
          <Headline style={{marginVertical: 20, color: "#4caf50"}}>
            Comments ({data.comments.length})
          </Headline>

          <FlatList 
            data={data.comments}
            renderItem={({ item }) => <Comment author={item.author} text={item.text} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 9
  },
  sentence: {
    marginBottom: 10
  },
  button: {
    marginTop: 20
  }
});

export default SentenceDetails;
