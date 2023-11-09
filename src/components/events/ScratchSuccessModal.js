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
import {
  ErrorIcon,
  InfoIcon,
  MagneticCardIcon,
  MagneticCardWeakIcon,
  UsDollarCircledIcon,
} from '../../constants/icons';
import {LogoPegasusWarrior2Image} from '../../constants/images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ScratchSuccessModal = ({modalVisible, setModalVisible}) => {
  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Success!</Text>
          <View style={styles.ModalContentView}>
            <View style={styles.TopView}>
              <Image
                source={LogoPegasusWarrior2Image}
                style={styles.LogoImage}
              />
              <Text style={styles.TopTextFont}>
                WEF Winter Festival and side clinic
              </Text>
            </View>
            <View style={styles.DetailView}>
              <View style={styles.DetailRowView}>
                <View style={styles.DetailTextView}>
                  <Text style={styles.DetailTextFont}>Scratch details:</Text>
                </View>
              </View>
              <View style={styles.DetailRowView}>
                <Image source={UsDollarCircledIcon} style={styles.Icon} />
                <View style={styles.DetailTextView}>
                  <Text style={styles.DetailTextFont}>
                    Amount scratched: $80
                  </Text>
                </View>
              </View>
              <View style={styles.DetailRowView}>
                <Image source={MagneticCardIcon} style={styles.Icon} />
                <View style={styles.DetailTextView}>
                  <Text style={styles.DetailTextFont}>
                    Refund to: XXXX-XXXX-XXXX-2039
                  </Text>
                </View>
              </View>
              <View style={styles.DetailRowView}>
                <Image source={ErrorIcon} style={styles.Icon} />
                <View style={styles.DetailTextView}>
                  <Text style={styles.DetailTextFont}>
                    Your scratches were submitted to the show - you are no
                    longer registered to participate in this event/classes you
                    scratched from.
                  </Text>
                  <Text style={styles.DetailTextFont}>
                    The show manager will review your scratches and will process
                    your refund in line with their show policies.
                  </Text>
                  <Text style={styles.DetailTextFont}>
                    Visit your Bills to view the status of your refund request.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.BottomButton}>
            <Pressable style={[styles.Button, styles.ButtonApply]}>
              <Text style={[styles.TextStyle, styles.TextApply]}>My Bills</Text>
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
  TopTextFont: {
    fontSize: 14,
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_DEFAULT,
    flexWrap: 'wrap',
    lineHeight: 25,
    marginLeft: 6,
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
    flexDirection: 'column',
    marginVertical: 5,
    marginHorizontal: 24,
  },
  Icon: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
  TopView: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    height: 55,
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 10,
    flexDirection: 'row',
  },
  LogoImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  DetailView: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    padding: 8,
  },
  DetailRowView: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
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

export default ScratchSuccessModal;
