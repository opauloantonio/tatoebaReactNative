import React from 'react';

import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { requirePngFlag } from '../../assets';

import { connect } from 'react-redux';

import { addBookmark, removeBookmark } from '../../actions/bookmarksActions';

const Sentence = props => {
  const bookmarked = props.bookmarks.bookmarks.find(b => b.id === props.id);

  return(
    <View style={styles.sentence}>
      <Image source={requirePngFlag(props.lang)} style={styles.flag} />

      <Text style={styles.text} selectable={true}>
        {props.text}
      </Text>

      {props.showDirect &&
        <Icon name="check-circle" size={15} color={props.direct ? "green" : "grey"} style={{paddingRight: 2}} />
      }

      {props.showBookmark &&
        <TouchableOpacity onPress={() => {
          if (bookmarked) {
            props.removeBookmark(props.id);
          } else {
            props.addBookmark({
              id: props.id,
              text: props.text,
              lang: props.lang
            });
          }
        }}>
          <Icon name={`bookmark`} size={20} color={bookmarked ? "green" : "grey"} />
        </TouchableOpacity>
      }
    </View>
  );
}

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
    flex: 1,
    paddingRight: 15,
  }
});

const mapStateToProps = state => ({
  bookmarks: state.bookmarksReducer,
});

const mapDispatchToProps = dispatch => ({
  addBookmark: sentence => dispatch(addBookmark(sentence)),
  removeBookmark: id => dispatch(removeBookmark(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sentence);
