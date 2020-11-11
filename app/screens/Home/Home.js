import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';

import { Button, Searchbar, Text, Divider } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = props => {
  const [searchText, setSearchText] = useState("");
  const [from, setFrom] = useState("und");
  const [to, setTo] = useState("und");

  const handleSearchText = text => setSearchText(text);

  const handleSubmitSearch = () => {
    if (searchText.length === 0) {
      return;
    }

    props.navigation.navigate("SearchResults", { from, to, text: searchText });
  }

  return(
    <View style={{flex: 1, marginHorizontal: 10,}}>
      <View style={styles.container}>
        <Searchbar 
          placeholder="Search"
          onChangeText={handleSearchText}
          value={searchText}
          onSubmitEditing={handleSubmitSearch}
        />
      </View>

      <View style={{...styles.container, flexDirection: "row"}}>
        <Text style={styles.languageChoices}>
          Any Language
        </Text>
        
        <Text style={{
          paddingHorizontal: 10
        }}>
          <Icon name="compare-arrows" size={25} color="#4caf50" />
        </Text>
        
        <Text style={{...styles.languageChoices, textAlign: "right"}}>
          Any Language
        </Text>
      </View>

      <View style={styles.container}>
        <Button mode="contained" onPress={handleSubmitSearch}>
          <Text style={{ color: "white" }}>SEARCH</Text>
        </Button>
      </View>

      <Divider />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  languageChoices: {
    color: "#4caf50",
    fontSize: 20,
    flex: 1,
  },
});

export default Home;
