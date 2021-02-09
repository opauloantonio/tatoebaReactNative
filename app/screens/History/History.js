import React from 'react';

import { 
  View, Text, FlatList, StyleSheet, Alert, Image, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button } from 'react-native-paper';

import { connect } from 'react-redux';

import { removeEntry, clearHistory } from '../../actions/historyActions';

import { requirePngFlag } from '../../assets';

const History = props => {
  if (props.searchHistory.history.length === 0) {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Your search history will appear here.</Text>
      </View>
    );
  } else {
    return(
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>
          {props.searchHistory.history.length} {props.searchHistory.history.length === 1 ? "entry" : "entries"}
        </Text>

        <FlatList 
          data={props.searchHistory.history}
          renderItem={({ item }) => (
            <View style={styles.entry}>
              <TouchableOpacity onPress={() => props.navigation.navigate("SearchResults", {
                from: item.from,
                to: item.to,
                text: item.text,
              })}>
                <View style={styles.languagesRow}>
                  {item.from === "und" ? 
                    <Icon name="language" size={30} color="blue" /> :
                    <Image source={requirePngFlag(item.from)} />
                  }

                  <Icon  name="arrow-right" size={30} color="#4caf50" />

                  {item.to === "und" ? 
                    <Icon name="language" size={30} color="blue" /> :
                    <Image source={requirePngFlag(item.to)} />
                  }
                  
                  <View style={{flex: 1, alignItems: "flex-end"}}>
                    <TouchableOpacity onPress={() => props.removeEntry(item.id)}>
                      <Icon name="delete" size={30} color="grey" />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text style={{marginTop: 10}}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={() => {
            Alert.alert(
              "Clear history",
              "Are you sure? This action can't be undone.",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { 
                  text: "Confirm", 
                  onPress: () => props.clearHistory()
                }
              ]
            )
          }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>CLEAR HISTORY</Text>
          </Button>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 10,
  },
  entry: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    marginVertical: 10,
  }, 
  buttonContainer: {
    
  },
  languagesRow: {
    flexDirection: "row",
    alignItems: "center"
  },
});

const mapStateToProps = state => ({
  searchHistory: state.historyReducer,
});

const mapDispatchToProps = dispatch => ({
  removeEntry: id => dispatch(removeEntry(id)),
  clearHistory: () => dispatch(clearHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
