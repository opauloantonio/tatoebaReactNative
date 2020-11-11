import React, { useState } from 'react';

import { View, FlatList, Text, StyleSheet } from 'react-native';

import { Button, Divider } from 'react-native-paper';

import Sentence from '../Sentence';

const SentenceContainer = props => {
  const [expanded, setExpanded] = useState(false);

  return(
    <View style={styles.container}>
      <View style={styles.sentence}>
        <Sentence 
          id={props.sentence.id}
          text={props.sentence.text} 
          lang={props.sentence.lang}
        />
      </View>

      <View style={{marginBottom: 10}}>
        <Divider />
      </View>

      <FlatList 
        data={expanded ? props.sentence.translations : props.sentence.translations.slice(0, 5)}
        renderItem={({ item }) => (
          <View style={styles.sentence}>
            <Sentence 
              id={item.id}
              text={item.text} 
              lang={item.lang}
              direct={item.direct}
              showDirect={true}
            />
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
    backgroundColor: "white",
    padding: 10,
    borderRadius: 9
  },
  sentence: {
    marginBottom: 10
  },
  button: {
    marginTop: 20
  }
})

export default SentenceContainer;
