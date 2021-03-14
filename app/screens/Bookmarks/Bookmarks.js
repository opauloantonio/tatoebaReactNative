import React from 'react';

import { 
  View, Text, FlatList, StyleSheet, Alert, TouchableOpacity
} from 'react-native';

import { Button } from 'react-native-paper';

import Sentence from '../../components/Sentence';

import { connect } from 'react-redux';

import { clearBookmarks } from '../../actions/bookmarksActions';

const Bookmarks = props => {
  if (props.bookmarks.bookmarks.length === 0) {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Your bookmarks will appear here.</Text>
      </View>
    );
  } else {
    return(
      <View style={styles.container}>
        <Text style={{textAlign: 'center', marginBottom: 10}}>
          {props.bookmarks.bookmarks.length} {props.bookmarks.bookmarks.length === 1 ? "bookmark" : "bookmarks"}
        </Text>

        <FlatList 
          data={props.bookmarks.bookmarks}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => props.navigation.navigate('SentenceDetails', {id: item.id})}>
              <View style={styles.sentence}>
                <Sentence 
                  id={item.id}
                  lang={item.lang}
                  text={item.text}
                  showBookmark={true}
                />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />

        <View>
          <Button mode="contained" onPress={() => {
            Alert.alert(
              "Clear bookmarks",
              "Are you sure? This action can't be undone.",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { 
                  text: "Confirm", 
                  onPress: () => props.clearBookmarks()
                }
              ]
            )
          }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>CLEAR BOOKMARKS</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 10,
  },
  sentence: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
});

const mapStateToProps = state => ({
  bookmarks: state.bookmarksReducer,
});

const mapDispatchToProps = dispatch => ({
  clearBookmarks: () => dispatch(clearBookmarks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
