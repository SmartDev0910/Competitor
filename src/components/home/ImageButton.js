import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';

const ImageButton = ({source, style, viewStyle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={viewStyle}>
        <Image
          source={source}
          style={style} //Update size as per your requirement
        />
      </View>
    </TouchableOpacity>
  );
};

export default ImageButton;
