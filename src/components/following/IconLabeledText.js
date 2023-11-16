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
import {LaurelWreathWeakIcon} from '../../constants/icons';
import GovermentRecordsModal from './GovermentRecordsModal';

const IconLabeledText = ({
  style,
  value,
  onChangeText,
  icon,
  placeholder,
  rightIconVisible,
}) => {
  const [showGovermentRecordsModal, setShowGovermentRecordsModal] =
    useState(false);

  const handleGovermentRecordsModal = () => {
    setShowGovermentRecordsModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <TouchableOpacity>
          <Image
            source={icon}
            style={{width: 24, height: 24, marginRight: 10}}
          />
        </TouchableOpacity>
        <TextInput
          style={[styles.TextInput, style]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
        {rightIconVisible ? (
          <TouchableOpacity
            style={styles.RightIconView}
            onPress={handleGovermentRecordsModal}>
            <Image source={LaurelWreathWeakIcon} style={styles.RightIcon} />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
      <GovermentRecordsModal
        modalVisible={showGovermentRecordsModal}
        setModalVisible={setShowGovermentRecordsModal}
        value={value}
      />
    </>
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
  RightIconView: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: COLOR_EVENT_BORDER,
    borderWidth: 1,
  },
  RightIcon: {
    width: 14,
    height: 14,
  },
});

export default IconLabeledText;
