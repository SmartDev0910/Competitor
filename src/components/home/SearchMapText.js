import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLOR_SEARCH_TEXT} from '../../constants/colors';
import {SearchThinIcon, SendThinIcon} from '../../constants/icons';

const SearchMapText = ({style, value, onChangeText, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={SearchThinIcon}
          style={{width: 24, height: 24, marginRight: 10}}
        />
      </TouchableOpacity>
      <TextInput
        style={style}
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter address..."
      />
      <TouchableOpacity onPress={onPress}>
        <Image source={SendThinIcon} style={{width: 24, height: 24}} />
      </TouchableOpacity>
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

export default SearchMapText;
