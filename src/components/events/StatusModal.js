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
import FollowingPeople from '../../constants/following/followingPeople';
import FollowerItem from './FollowerItem';
import EligibilityItem from './EligibilityItem';
import EligibilityEvents from '../../constants/events/eligibility';
import DateItem from './DateItem';
import {HelpIcon, InfoIcon, RubberStampWeakIcon} from '../../constants/icons';
import StatusDetailItem from './StatusDetailItem';
import StatusHelpItem from './StatusHelpItem';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const StatusModal = ({modalVisible, setModalVisible}) => {
  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Status</Text>
          <View style={styles.ModalContentView}>
            <FollowerItem
              fullName={FollowingPeople[0].fullName}
              avatar={FollowingPeople[0].avatar}
              match={FollowingPeople[0].match}
              style={styles.FollowerItem}
            />
            <EligibilityItem
              title={EligibilityEvents[0].title}
              image={EligibilityEvents[0].image}
            />
            <DateItem title="Expired: 2021-12-13" image={RubberStampWeakIcon} />
            <StatusDetailItem
              image={InfoIcon}
              title="Detail"
              content="No details available"
            />
            <StatusHelpItem
              image={HelpIcon}
              title="How do I fix this?"
              content="They must update their details with the USEF to fix this issue. Once fixed, click 'Refresh' to update their Pegasus profile."
            />
          </View>

          <View style={styles.BottomButton}>
            <Pressable style={[styles.Button, styles.ButtonApply]}>
              <Text style={[styles.TextStyle, styles.TextApply]}>Fix</Text>
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
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
});

export default StatusModal;
