import React, { useState, useEffect } from 'react';

import { View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

import { Button, Searchbar, Text, Divider } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

import languages from '../../assets/languages';

const Home = props => {
  const [searchText, setSearchText] = useState("");
  const [from, setFrom] = useState("und");
  const [to, setTo] = useState("und");

  const handleSearchText = text => setSearchText(text);

  const handleSubmitSearch = () => {
    if (searchText.length === 0) {
      return;
    }

    Keyboard.dismiss();
    props.navigation.navigate("SearchResults", { from, to, text: searchText });
  }

  const swapLanguages = () => {
    const [nFrom, nTo] = [to, from];

    setFrom(nFrom);
    setTo(nTo);
  }

  useEffect(() => {
    if (props.route.params?.target === "from") {
      setFrom(props.route.params.language);
    } else if (props.route.params?.target === "to") {
      setTo(props.route.params.language);
    }
  }, [props.route.params])

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
        <TouchableOpacity 
          onPress={() => {
            Keyboard.dismiss();
            props.navigation.navigate("ChooseLanguage", {target: "from"});
          }} 
          style={styles.languageChoiceWrapper}
        >
          <Text style={styles.languageChoice}>
            {from === "und" ? "Any Language" : languages[from].name}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={swapLanguages}>
          <Text style={{ paddingHorizontal: 10 }}>
            <Icon name="compare-arrows" size={25} color="#4caf50" />
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => {
            Keyboard.dismiss();
            props.navigation.navigate("ChooseLanguage", {target: "to"});
          }} 
          style={styles.languageChoiceWrapper}
        >
          <Text style={{...styles.languageChoice, textAlign: "right"}}>
            {to === "und" ? "Any Language" : languages[to].name}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Button mode="contained" onPress={handleSubmitSearch}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>SEARCH</Text>
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
  languageChoice: {
    color: "#4caf50",
    fontSize: 20,
  },
  languageChoiceWrapper: {
    flex: 1,
  }
});

export default Home;
