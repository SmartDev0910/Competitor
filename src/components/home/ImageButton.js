import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {COLOR_PINK_THIN} from '../../constants/colors';

const ImageButton = ({source, style, viewStyle, active, onPress}) => {
  return (
    <>
      {active ? (
        <TouchableOpacity onPress={onPress}>
          <View style={[viewStyle, styles.ActiveView]}>
            <Image source={source} style={style} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <View style={viewStyle}>
            <Image source={source} style={style} />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  ActiveView: {
    backgroundColor: COLOR_PINK_THIN,
    borderColor: COLOR_PINK_THIN,
  },
});

export default ImageButton;
