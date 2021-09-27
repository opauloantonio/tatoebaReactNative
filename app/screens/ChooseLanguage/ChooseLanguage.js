import React, { useState, useEffect } from 'react';

import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import { Searchbar, Text, Divider } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { requirePngFlag } from '../../assets';

import languages from '../../assets/languages';

import { connect } from 'react-redux';

import { toggleFavorite } from '../../actions/favoriteLanguagesActions';

const ChooseLanguage = props => {
  const [search, setSearch] = useState("");
  const [languageList, setLanguageList] = useState([]);

  const handleSearch = text => setSearch(text);

  useEffect(() => {
    if (search.length === 0) {
      if (props.favorites.favorites.length > 0) {
        let favorites = [];
        let others = [];

        Object.keys(languages).forEach(k => {
          if (props.favorites.favorites.includes(k)) {
            favorites.push({name: languages[k].name, code: k})
          } else {
            others.push({name: languages[k].name, code: k})
          }
        });

        setLanguageList([...favorites, ...others]);
      } else {
        setLanguageList(Object.keys(languages).map(k => ({name: languages[k].name, code: k})));
      }
    } else {
      setLanguageList(
        Object.keys(languages).map(
          k => ({name: languages[k].name, code: k})
        ).filter(l => l.name.toLowerCase().includes(search.toLowerCase()))
      );
    }
  }, [search, props.favorites.favorites]);

  return(
    <View style={styles.container}>
      <Searchbar 
        placeholder="Search for a language"
        onChangeText={handleSearch}
        value={search}
      />

      <Divider style={styles.divider} />

      <View>
        <TouchableOpacity 
          style={{...styles.language, marginBottom: 10}}
          onPress={() => props.navigation.navigate("Home", {
            target: props.route.params.target, language: "und"
          })}
        >
          <Icon name="language" size={30} color="#757575" />

          <Text style={styles.languageName}>Any Language</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={languageList}
        renderItem={({item}) => (
          <TouchableOpacity 
            style={styles.language}
            onPress={() => props.navigation.navigate("Home", {
              target: props.route.params.target, language: item.code
            })}
          >
            <Image source={requirePngFlag(item.code)} style={styles.flag} />

            <Text style={styles.languageName}>{item.name}</Text>

            <TouchableOpacity onPress={() => {
              props.toggleFavorite(item.code)
            }}>
              <Icon 
                name="favorite" size={22}  
                color={props.favorites.favorites.includes(item.code) ? "red" : "grey"}
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity>
          </TouchableOpacity> 
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    flex: 1,
  },
  divider: {
    marginTop: 10,
  },
  language: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  languageName: {
    marginLeft: 20,
    flex: 1,
  }
});

const mapStateToProps = state => ({
  favorites: state.favoriteLanguagesReducer,
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: code => dispatch(toggleFavorite(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage);
