import React from 'react';

import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import { addEntry, removeEntry, clearHistory } from '../../actions/historyActions';

const History = props => {
  if (props.searchHistory.history.length === 0) {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Your search history will appear here.</Text>
      </View>
    );
  } else {
    return(
      <View style={{flex: 1}}>
        
      </View>
    )
  }
};

const mapStateToProps = state => ({
  searchHistory: state.historyReducer,
});

const mapDispatchToProps = dispatch => ({
  addEntry: entry => dispatch(addEntry(entry)),
  removeEntry: id => dispatch(removeEntry(id)),
  clearHistory: () => dispatch(clearHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
