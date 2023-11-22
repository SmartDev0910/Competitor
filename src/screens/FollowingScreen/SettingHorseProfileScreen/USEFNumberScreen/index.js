import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import {FONT_REGULAR} from '../../../../constants/fonts';
import {ArrowLeftIcon, SynchronizeWeakIcon} from '../../../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_PINK,
} from '../../../../constants/colors';
import IconLabeledText from '../../../../components/following/IconLabeledText';
import {UsefLogo1Image} from '../../../../constants/images';
import SendEmailVerificationModal from '../../../../components/following/SendEmailVerificationModal';

const USEFNumberScreen = ({navigation}) => {
  const [usefNumber, setUsefNumber] = useState('');
  const [showSendEmailVerificationModal, setShowSendEmailVerificationModal] =
    useState(false);

  const handleSendEmailVerificationModal = () => {
    setShowSendEmailVerificationModal(true);
  };

  return (
    <>
      <ScrollView style={styles.Wrapper}>
        <View>
          <View style={styles.Appbar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
            </TouchableOpacity>
            <Text style={styles.AppbarTextFont}>Horses USEF number</Text>
          </View>
          <View style={styles.ContentView}>
            <Text style={styles.DescTextFont}>
              {`Enter horses USEF number to sync its profile with the USEF. This will ensure its profile data is always accurate.`}
            </Text>
            <IconLabeledText
              icon={UsefLogo1Image}
              placeholder={'Enter USEF number...'}
              rightIconVisible={false}
              value={usefNumber}
              onChangeText={text => setUsefNumber(text)}
            />
            {usefNumber ? (
              <Pressable
                style={[styles.Button, styles.ButtonApply]}
                onPress={handleSendEmailVerificationModal}>
                <Text style={[styles.TextStyle, styles.TextApply]}>
                  Synchronize
                </Text>
              </Pressable>
            ) : (
              <TouchableOpacity style={styles.ActionButton}>
                <Image source={SynchronizeWeakIcon} style={styles.ActionIcon} />
                <Text style={styles.ActionTextFont}>Synchronize</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
      <SendEmailVerificationModal
        modalVisible={showSendEmailVerificationModal}
        setModalVisible={setShowSendEmailVerificationModal}
      />
    </>
  );
};

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
  ContentView: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    flexDirection: 'column',
    gap: 10,
  },
  DescTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 25,
  },
  ActionButton: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 12,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActionTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_COMMENT,
    lineHeight: 24,
  },
  ActionIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 20,
    top: 16,
  },
  Button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextApply: {
    color: COLOR_WHITE,
  },
});

export default USEFNumberScreen;
