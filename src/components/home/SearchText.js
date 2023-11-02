import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLOR_SEARCH_TEXT} from '../../constants/colors';
import {CancelWeakIcon} from '../../constants/icons';

const SearchText = ({style, value, onChangeText, clearInput}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={style}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search Pegasus..."
      />
      {value ? (
        <TouchableOpacity onPress={clearInput}>
          <Image source={CancelWeakIcon} style={{width: 24, height: 24}} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_SEARCH_TEXT,
    borderRadius: 45,
    paddingHorizontal: 20,
  },
});

export default SearchText;
