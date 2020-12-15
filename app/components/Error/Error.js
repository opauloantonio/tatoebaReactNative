import React from 'react';

import { View, Text } from 'react-native';

import { Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Error = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Icon name="warning" color="#8B0000" size={100} />
    
    <Text style={{marginVertical: 20}}>
      {props.message}
    </Text>
    
    <Button mode="contained" onPress={props.retry}>
      <Text style={{color: "white"}}>
        RETRY
      </Text>
    </Button>
  </View>
);

export default Error;
