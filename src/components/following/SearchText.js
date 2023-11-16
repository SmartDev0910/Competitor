import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_SEARCH_TEXT,
  COLOR_WHITE,
} from '../../constants/colors';
import {SearchIcon} from '../../constants/icons';

const SearchText = ({style, value, placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.TextInput, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <TouchableOpacity>
        <Image source={SearchIcon} style={{width: 24, height: 24}} />
      </TouchableOpacity>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 45,
    paddingHorizontal: 20,
    height: 50,
    marginBottom: 10,
  },
  TextInput: {
    width: width - 100,
  },
});

export default SearchText;
