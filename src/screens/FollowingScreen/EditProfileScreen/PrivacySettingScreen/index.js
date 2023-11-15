import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import {FONT_REGULAR} from '../../../../constants/fonts';
import {ArrowLeftIcon, HelpIcon} from '../../../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_BUTTON_CANCEL,
  COLOR_PINK,
  COLOR_BUTTON_DEFAULT,
} from '../../../../constants/colors';
import PrivacySettingsHelpModal from '../../../../components/following/PrivacySettingsHelpModal';

const PrivacySettingScreen = ({navigation}) => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const handleHelpModal = () => {
    setShowHelpModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.Appbar}>
          <View style={styles.AppTitleBarView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
            </TouchableOpacity>
            <Text style={styles.AppbarTextFont}>Privacy settings</Text>
          </View>
          <TouchableOpacity onPress={() => handleHelpModal()}>
            <Image source={HelpIcon} style={styles.AppbarButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.ContentView}>
          <Text style={styles.InfoTextFont}>
            Make your account private to prevent non-team members from seeing
            your profile.
          </Text>
        </View>
        <View style={styles.BottomButton}>
          <Pressable style={[styles.Button, styles.ButtonApply]}>
            <Text style={[styles.TextStyle, styles.TextApply]}>Save</Text>
          </Pressable>
          <Pressable style={[styles.Button, styles.ButtonCancel]}>
            <Text style={[styles.TextStyle, styles.TextCancel]}>Close</Text>
          </Pressable>
        </View>
      </View>
      <PrivacySettingsHelpModal
        modalVisible={showHelpModal}
        setModalVisible={setShowHelpModal}
      />
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  Appbar: {
    height: 36,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  AppbarButton: {
    width: 22,
    height: 22,
  },
  AppbarTextFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_DEFAULT,
    fontSize: 24,
    marginLeft: 7,
  },
  AppTitleBarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ContentView: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  InfoTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 25,
    color: COLOR_FONT_DEFAULT,
    height: 80,
    marginBottom: 21,
  },
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 10,
    width: width - 48,
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
  ButtonCancel: {
    backgroundColor: COLOR_BUTTON_CANCEL,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
    marginTop: 20,
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
});

export default PrivacySettingScreen;
