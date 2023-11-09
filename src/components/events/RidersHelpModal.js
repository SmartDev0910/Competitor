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
import {
  AddUserMaleIcon,
  HelpIcon,
  PublicSafetyIcon,
  UserGroupsIcon,
} from '../../constants/icons';
import StatusHelpItem from './StatusHelpItem';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const RidersHelpModal = ({modalVisible, setModalVisible}) => {
  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Riders</Text>
          <View style={styles.ModalContentView}>
            <StatusHelpItem
              image={AddUserMaleIcon}
              title="Add riders to an event"
              content="Select the riders you wish to register for this event.

              You can only select the riders who have Authorized you to register them for events in your Team settings.
              
              You will select horses next."
            />
            <StatusHelpItem
              image={PublicSafetyIcon}
              title="Want to add someone new?"
              content="You can only register yourself, and, team members that have add you to their Team in their account.

              To register someone new, you must contact that person and ask them to add and authorized you to their team, in their  account.
              
              This system is in place to prevent fraud.
              
              "
            />
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
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
});

export default RidersHelpModal;
