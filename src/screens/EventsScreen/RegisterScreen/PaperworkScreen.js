import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Appbar from './Appbar';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_FONT_DIVIDER,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import PaperworkHelpModal from '../../../components/events/PaperworkHelpModal';
import {InfoIcon} from '../../../constants/icons';
import Divider from '../../../components/home/Divider';
import RegisteredRiders from '../../../constants/events/registeredRiders';
import RegisteredRiderItem from '../../../components/events/RegisteredRiderItem';
import PaperworkSignInfoModal from '../../../components/events/PaperworkSignInfoModal';

const PaperworkScreen = ({navigation}) => {
  const [showPaperworkHelpModal, setShowPaperworkHelpModal] =
    React.useState(false);
  const [showPaperworkSignInfoModal, setShowPaperworkSignInfoModal] =
    React.useState(false);

  const handlePaperworkHelpModal = () => {
    setShowPaperworkHelpModal(true);
  };

  const handlePaperworkSignInfoModal = () => {
    setShowPaperworkSignInfoModal(true);
  };

  const handleNext = () => {
    navigation.navigate('RegisterSignScreen');
  };

  const handleSaveAndExit = () => {};

  const handleCancel = () => {};

  return (
    <>
      <View style={styles.Wrapper}>
        <Appbar
          title="Paperwork"
          navigation={navigation}
          visibleHelp={true}
          onInfoPress={handlePaperworkHelpModal}
        />
        <ScrollView>
          <View style={styles.ContentView}>
            <Text style={styles.DescFont}>
              Add team members per rider to send them event paperwork to sign
            </Text>
            <View style={styles.InfoView}>
              <Text style={[styles.InfoTitleFont, {marginBottom: 8}]}>
                Paperwork to sign:
              </Text>
              <View style={styles.InfoRowView}>
                <Text style={styles.InfoTitleFont}>Universal Entry Waiver</Text>
                <TouchableOpacity onPress={handlePaperworkSignInfoModal}>
                  <Image source={InfoIcon} style={styles.InfoIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.InfoRowView}>
                <Text style={styles.InfoTitleFont}>USEF Entry Agreement</Text>
                <TouchableOpacity onPress={handlePaperworkSignInfoModal}>
                  <Image source={InfoIcon} style={styles.InfoIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.InfoRowView}>
                <Text style={styles.InfoTitleFont}>
                  USEF Waiver & Release of Liability
                </Text>
                <TouchableOpacity onPress={handlePaperworkSignInfoModal}>
                  <Image source={InfoIcon} style={styles.InfoIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <Divider style={styles.Divider} />
            <View style={styles.RiderTitleView}>
              <Text style={styles.RiderTitleFont}>Registered riders</Text>
              <Text style={styles.ExpandAllFont}>Expand all</Text>
            </View>
            {RegisteredRiders.map((item, index) => {
              return (
                <RegisteredRiderItem
                  key={index}
                  fullName={item.fullName}
                  avatar={item.avatar}
                  status={item.status}
                  collapsed={true}
                />
              );
            })}
            <Pressable
              style={[styles.Button, styles.ButtonApply]}
              onPress={handleNext}>
              <Text style={[styles.TextStyle, styles.TextApply]}>
                {'Next >'}
              </Text>
            </Pressable>
            <Pressable
              style={[styles.Button, styles.ButtonReadyApply]}
              onPress={handleSaveAndExit}>
              <Text style={[styles.TextStyle, styles.TextReadyApply]}>
                {'SAVE & EXIT'}
              </Text>
            </Pressable>
            <Pressable
              style={[styles.Button, styles.ButtonCancel]}
              onPress={handleCancel}>
              <Text style={[styles.TextStyle, styles.TextCancel]}>Cancel</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <PaperworkHelpModal
        modalVisible={showPaperworkHelpModal}
        setModalVisible={setShowPaperworkHelpModal}
      />
      <PaperworkSignInfoModal
        modalVisible={showPaperworkSignInfoModal}
        setModalVisible={setShowPaperworkSignInfoModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'column',
  },
  ContentView: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  Button: {
    borderRadius: 10,
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
    borderWidth: 1,
    borderColor: COLOR_PINK,
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
  DescFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 25,
    color: COLOR_FONT_DEFAULT,
  },
  InfoView: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 20,
  },
  InfoTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  InfoRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  InfoIcon: {
    width: 20,
    height: 20,
  },
  Divider: {
    height: 1,
    backgroundColor: COLOR_EVENT_BORDER,
    marginVertical: 20,
  },
  RiderTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  RiderTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
  },
  ExpandAllFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_COMMENT,
    lineHeight: 34,
  },
});

export default PaperworkScreen;
