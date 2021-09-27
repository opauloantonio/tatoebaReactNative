import React from 'react';

import { View, StyleSheet } from 'react-native';

import { Divider, Text } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

import useTheme from '../../utils/useTheme';

const Comment = props => {
  const theme = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: theme === "dark" ? "#212121" : "white"}}>
      <View style={styles.authorContainer}>
        <Icon name="account-circle" size={20} color="grey" />
        <Text style={{flex: 1, marginLeft: 10}}>{props.author}</Text>
      </View>

      <Divider style={styles.divider} />

      <View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 9, 
    padding: 10, 
  },
  authorContainer: {
    flexDirection: "row", 
    alignItems: 'center'
  },
  divider: {
    marginVertical: 10
  },
  text: {
    flex: 1,
  }
});

export default Comment;
