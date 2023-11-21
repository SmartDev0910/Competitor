import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLOR_EVENT_BORDER} from '../../constants/colors';
import {HiddenWeakIcon, LockWeakIcon} from '../../constants/icons';

const PasswordTextInput = ({style, value, onChangeText, placeholder}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const handlePasswordVisiblePress = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.Wrapper}>
      <Image
        source={LockWeakIcon}
        style={{width: 24, height: 24, marginRight: 10}}
      />
      <TextInput
        style={[styles.TextInput, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={passwordVisible}
      />
      <TouchableOpacity onPress={handlePasswordVisiblePress}>
        <Image source={HiddenWeakIcon} style={styles.RightIcon} />
      </TouchableOpacity>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    marginVertical: 5,
  },
  TextInput: {
    width: width - 132,
    height: 55,
  },
  RightIcon: {
    width: 24,
    height: 24,
  },
});

export default PasswordTextInput;
