import React, {useContext, useState} from 'react';
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
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_MODAL_OVERLAY,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {InfoIcon, MailWeakIcon, NameTagWeakIcon} from '../../constants/icons';
import AssignText from './AssignText';
import {ModalContext} from '../../providers/ModalProvider';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AssignTicketModal = ({modalVisible, setModalVisible, title}) => {
  const [
    ,
    ,
    ticketAssignName,
    setTicketAssignName,
    ticketAssignEmail,
    setTicketAssignEmail,
  ] = useContext(ModalContext);

  const onChangeAssignName = text => {
    setTicketAssignName(text);
  };

  const onChangeAssignEmail = text => {
    setTicketAssignEmail(text);
  };

  const checkFilledText = () => {
    if (ticketAssignName !== '' && ticketAssignEmail !== '') return true;
    return false;
  };

  const handleSendTicket = () => {
    if (checkFilledText()) setModalVisible(false);
    return;
  };

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Assign ticket</Text>
          <View style={styles.ModalContentView}>
            <View style={styles.DetailRowView}>
              <Image source={InfoIcon} style={styles.Icon} />
              <View style={styles.DetailTextView}>
                <Text style={styles.DetailTextFont}>Instructions</Text>
                <Text style={styles.DetailTextFont}>
                  Enter the name that will be add to this ticket and then enter
                  their email address to send them a copy.
                </Text>
              </View>
            </View>
            <View style={styles.AssignTextView}>
              <AssignText
                style={styles.AssignText}
                icon={NameTagWeakIcon}
                value={ticketAssignName}
                placeholder="Enter name"
                onChangeText={onChangeAssignName}
              />
            </View>
            <View style={styles.AssignTextView}>
              <AssignText
                style={styles.AssignText}
                icon={MailWeakIcon}
                value={ticketAssignEmail}
                placeholder="Enter email"
                onChangeText={onChangeAssignEmail}
              />
            </View>
          </View>

          <View style={styles.BottomButton}>
            <Pressable
              style={[
                styles.Button,
                checkFilledText()
                  ? styles.ButtonApply
                  : styles.ButtonReadyApply,
              ]}
              onPress={handleSendTicket}>
              <Text
                style={[
                  styles.TextStyle,
                  checkFilledText() ? styles.TextApply : styles.TextReadyApply,
                ]}>
                Send Ticket
              </Text>
            </Pressable>
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
  ButtonReadyApply: {
    backgroundColor: COLOR_WHITE,
    borderWidth: 1,
    borderColor: COLOR_PINK,
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
  TextReadyApply: {
    color: COLOR_PINK,
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
    flexDirection: 'column',
    marginVertical: 5,
    marginHorizontal: 24,
  },
  Icon: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
  DetailRowView: {
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    padding: 8,
  },
  DetailTextFont: {
    fontSize: 14,
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_DEFAULT,
    flexWrap: 'wrap',
    lineHeight: 25,
  },
  DetailTextView: {
    flex: 1,
    flexDirection: 'column',
  },
  AssignText: {
    width: width - 48,
    height: 55,
    alignItems: 'center',
  },
  AssignTextView: {
    marginTop: 10,
  },
});

export default AssignTicketModal;
