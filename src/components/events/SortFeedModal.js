import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  Image,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_FONT_DEFAULT,
  COLOR_MODAL_OVERLAY,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import SoftFeedButton from './SoftFeedButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SortFeedModal = ({modalVisible, setModalVisible, navigation}) => {
  const [selectedButton, setSelectedButton] = React.useState('All updates');

  const handleSelect = buttonText => {
    setSelectedButton(buttonText);
  };

  const handleApplyButton = () => {
    navigation.navigate('ViewEventScreen');
    setModalVisible(false);
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Sort feed</Text>
          <View style={styles.ModalContentView}>
            <SoftFeedButton
              text="All updates"
              selected={selectedButton === 'All updates'}
              onPress={() => handleSelect('All updates')}
            />

            <SoftFeedButton
              text="Event Organizer updates"
              selected={selectedButton === 'Event Organizer updates'}
              onPress={() => handleSelect('Event Organizer updates')}
            />

            <SoftFeedButton
              text="Exhibitor updates"
              selected={selectedButton === 'Exhibitor updates'}
              onPress={() => handleSelect('Exhibitor updates')}
            />

            <SoftFeedButton
              text="Sponsor/Vendor updates"
              selected={selectedButton === 'Sponsor/Vendor updates'}
              onPress={() => handleSelect('Sponsor/Vendor updates')}
            />
          </View>
          <View style={styles.BottomButton}>
            <Pressable
              style={[styles.Button, styles.ButtonApply]}
              onPress={handleApplyButton}>
              <Text style={[styles.TextStyle, styles.TextApply]}>Apply</Text>
            </Pressable>
            <Pressable
              style={[styles.Button, styles.ButtonCancel]}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.TextStyle, styles.TextCancel]}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  OverlayStyle: {
    backgroundColor: COLOR_MODAL_OVERLAY,
    position: 'absolute',
    width: width,
    height: height,
  },
  ModalView: {
    marginTop: 220,
    width: width,
    height: height - 220,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  ScrollView: {
    paddingHorizontal: 24,
  },
  Button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
    marginTop: 20,
  },
  ButtonCancel: {
    backgroundColor: COLOR_BUTTON_CANCEL,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextCancel: {
    color: COLOR_BUTTON_DEFAULT,
  },
  TextApply: {
    color: COLOR_WHITE,
  },
  ModalTitleFont: {
    marginBottom: 15,
    fontFamily: FONT_REGULAR,
    fontSize: 25,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
    marginHorizontal: 24,
  },
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 30,
    width: width - 48,
  },
  ModalContentView: {
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
});

export default SortFeedModal;
