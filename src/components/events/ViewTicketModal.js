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
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_MODAL_OVERLAY,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {
  CalendarIcon,
  LocationIcon,
  NameTagIcon,
  TwoTicketsIcon,
} from '../../constants/icons';
import {QRCodeImage} from '../../constants/images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ViewTicketModal = ({modalVisible, setModalVisible, title}) => {
  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>View ticket</Text>
          <View style={styles.ModalContentView}>
            <Text style={styles.TitleFont}>{title}</Text>
            <View style={styles.DetailView}>
              <View style={styles.DetailTextView}>
                <View style={styles.DetailRowView}>
                  <Image source={TwoTicketsIcon} style={styles.Icon} />
                  <Text style={styles.DetailTextFont}>
                    WEF Winter Festival and Side Clinic
                  </Text>
                </View>
                <View style={styles.DetailRowView}>
                  <Image source={CalendarIcon} style={styles.Icon} />
                  <Text style={styles.DetailTextFont}>
                    08:30 am 12th Nov, 2023
                  </Text>
                </View>
                <View style={styles.DetailRowView}>
                  <Image source={LocationIcon} style={styles.Icon} />
                  <Text style={styles.DetailTextFont}>
                    1927 Foxcroft Rd Middleburg, VA 20117
                  </Text>
                </View>
                <View style={styles.DetailRowView}>
                  <Image source={NameTagIcon} style={styles.Icon} />
                  <Text style={styles.DetailTextFont}>Sam Baynes</Text>
                </View>
              </View>
              <View style={styles.QRView}>
                <Image source={QRCodeImage} style={styles.QRCodeImage} />
              </View>
            </View>
          </View>

          <View style={styles.BottomButton}>
            <Pressable style={[styles.Button, styles.ButtonApply]}>
              <Text style={[styles.TextStyle, styles.TextApply]}>
                Resend Ticket
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
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    padding: 8,
    flexDirection: 'column',
    marginVertical: 5,
    marginHorizontal: 24,
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
  },
  Icon: {
    width: 14,
    height: 14,
  },
  DetailView: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 10,
  },
  DetailTextView: {
    flex: 1,
    flexDirection: 'column',
  },
  QRCodeImage: {
    width: 128,
    height: 128,
  },
  QRView: {
    flex: 1,
    alignItems: 'center',
  },
  DetailRowView: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  DetailTextFont: {
    fontSize: 12,
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_DEFAULT,
    flexWrap: 'wrap',
    flex: 1,
  },
});

export default ViewTicketModal;
