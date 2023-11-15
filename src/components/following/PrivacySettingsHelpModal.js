import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
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
import {AddUserMaleIcon, InfoIcon, LawIcon} from '../../constants/icons';
import StatusHelpItem from './StatusHelpItem';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PrivacySettingsHelpModal = ({modalVisible, setModalVisible}) => {
  return (
    <>
      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.OverlayStyle} />
          <View style={styles.ModalView}>
            <Text style={styles.ModalTitleFont}>Privacy Settings</Text>
            <View style={styles.ModalContentView}>
              <Text style={styles.HelpTextFont}>
                {`When your account is Public, your profile, future events and past events can be seen by other members with Pegasus accounts. Sensitive profile information such as your address will be hidden.

When your account is Private, only your followers can view your profile information and future events. Your profile picture, name, nationality and past events will remain visible to non-followers.

If you are under thirteen (13) years of age, your profile will be set to Private automatically and all event participation details will be hidden.

Regardless of whether your account is set to Public or Private, members of the public will view your profile in Private mode.

Note. If you have registered for an event, the event organizer will have access to your full profile to support management of your participation in the event.`}
              </Text>
            </View>

            <View style={styles.BottomButton}>
              <Pressable
                style={[styles.Button, styles.ButtonCancel]}
                onPress={() => setModalVisible(false)}>
                <Text style={[styles.TextStyle, styles.TextCancel]}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
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
    marginTop: 106,
    width: width,
    height: height - 106,
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
    paddingHorizontal: 24,
    flexDirection: 'column',
  },
  HelpTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
});

export default PrivacySettingsHelpModal;
