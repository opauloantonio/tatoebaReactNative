import React, { useState } from 'react';

import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { Button, Divider, Text } from 'react-native-paper';

import Sentence from '../Sentence';

import useTheme from '../../utils/useTheme';

const SentenceContainer = props => {
  const [expanded, setExpanded] = useState(props.expanded || false);

  const theme = useTheme();

  return(
    <View style={{...styles.container, backgroundColor: theme === "dark" ? "#212121" : "white"}}>
      <View style={styles.sentence}>
        <TouchableOpacity onPress={() => props.navigation.navigate('SentenceDetails', {id: props.sentence.id})}>
          <Sentence 
            id={props.sentence.id}
            text={props.sentence.text} 
            lang={props.sentence.lang}
            showBookmark={true}
          />
        </TouchableOpacity>
      </View>

      <View style={{marginBottom: 10}}>
        <Divider />
      </View>

      <FlatList 
        data={expanded ? props.sentence.translations : props.sentence.translations.slice(0, 5)}
        renderItem={({ item }) => (
          <View style={styles.sentence}>
            <TouchableOpacity onPress={() => props.navigation.navigate('SentenceDetails', {id: item.id})}>
              <Sentence 
                id={item.id}
                text={item.text} 
                lang={item.lang}
                direct={item.direct}
                showDirect={true}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {props.sentence.translations.length > 5 &&
        <Button mode="outlined" onPress={() => setExpanded(!expanded)} style={styles.button}>
          <Text>
            {expanded ? "SHOW LESS TRANSLATIONS" : `SHOW ALL TRANSLATIONS (${props.sentence.translations.length})`}
          </Text> 
        </Button>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 9,
  },
  sentence: {
    marginBottom: 10
  },
  button: {
    marginTop: 20
  }
})

export default SentenceContainer;
