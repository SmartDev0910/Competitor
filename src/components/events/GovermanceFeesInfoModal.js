import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
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
import {PublicSafetyIcon, YearOfHorseIcon} from '../../constants/icons';
import StatusHelpItem from './StatusHelpItem';
import {UsefLogo1Image, UsefLogo7Image} from '../../constants/images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const GovermanceFeesInfoModal = ({modalVisible, setModalVisible}) => {
  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Governance fees</Text>
          <ScrollView>
            <View style={styles.ModalContentView}>
              <Text
                style={
                  styles.TitleFont
                }>{`Governance fees are add by the event organizer and are mandatory; they cannot be removed from your bill. They are charged per horse registered.

If your profile is missing relevant affiliate numbers, or they have expired, you will be charged a show pass fees.`}</Text>
              <StatusHelpItem
                image={UsefLogo1Image}
                title="USEF fee"
                content="Required payment by all exhibitors in USEF licensed events to fund USEF governance operations."
              />
              <StatusHelpItem
                image={UsefLogo1Image}
                title="USEF drug fee"
                content="Required payment by all exhibitors in USEF licensed events to fund USEF drug testing operations."
              />
              <StatusHelpItem
                image={UsefLogo1Image}
                title="USEF Show pass fee"
                content="Required payment by all exhibitors in USEF licensed events to fund USEF governance operations."
              />
              <StatusHelpItem
                image={UsefLogo7Image}
                title="USHJA horse fee"
                content="Required payment by all exhibitors in USEF licensed events to fund USEF governance operations."
              />
            </View>
          </ScrollView>
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
    paddingHorizontal: 24,
    flexDirection: 'column',
    paddingBottom: 80,
  },
  TitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    flexWrap: 'wrap',
    marginBottom: 15,
    color: COLOR_FONT_DEFAULT,
  },
});

export default GovermanceFeesInfoModal;
