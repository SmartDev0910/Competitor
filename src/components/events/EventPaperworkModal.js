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
import EligibilityItem from './EligibilityItem';
import IconItem from './IconItem';
import {FullScreenIcon, HelpIcon, UserGroupsIcon} from '../../constants/icons';
import StatusHelpItem from './StatusHelpItem';
import Docs from '../../constants/events/docs';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EventPaperworkModal = ({modalVisible, setModalVisible}) => {
  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Event paperwork</Text>
          <View style={styles.ModalContentView}>
            <EligibilityItem title={Docs[0].title} image={Docs[0].image} />
            <IconItem title="View Document" image={FullScreenIcon} />
            <IconItem title="View Annex" image={FullScreenIcon} />
            <StatusHelpItem
              image={HelpIcon}
              title="What is this?"
              content="A signed declaration that you will adhere to the USEFs rules and policies at this event."
            />
            <StatusHelpItem
              image={UserGroupsIcon}
              title="Who must sign?"
              content="All riders, owners, trainers and coaches attending this event. Guardians of any rider under the age of 18 competing in this event."
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

export default EventPaperworkModal;
