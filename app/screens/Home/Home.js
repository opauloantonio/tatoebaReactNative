import React from 'react';

import { View, Text } from 'react-native';

import { Button } from 'react-native-paper';

const Home = props => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home Screen</Text>

    <Button mode="contained" onPress={() => props.navigation.navigate("SearchResults")}>
      <Text style={{color: "white"}}>SEARCH</Text>
    </Button>
  </View>
);

export default Home;
