import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { requirePngFlag } from '../../assets';

const Sentence = props => (
  <View style={styles.sentence}>
    <Image source={requirePngFlag(props.lang)} style={styles.flag} />

    <Text style={styles.text} selectable={true}>
      {props.text} 
    </Text>

    {props.showDirect &&
      <Icon name="check-circle" size={15} color={props.direct ? "green" : "grey"} />
    }
  </View>
);

const styles = StyleSheet.create({
  sentence: {
    flexDirection: 'row',
  },
  flag: {
    width: 30, 
    height: 20,
    marginRight: 15,
  },
  text: {
    flex: 1
  }
})

export default Sentence;
