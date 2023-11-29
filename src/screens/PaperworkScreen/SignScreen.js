import React from 'react';
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
import {FONT_REGULAR} from '../../constants/fonts';
import {
  ArrowLeftIcon,
  DocumentsIcon,
  ErrorIcon,
  FullScreenIcon,
  NameTagIcon,
  PeopleIcon,
} from '../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
} from '../../constants/colors';
import ImageLabeledItem from '../../components/paperwork/ImageLabeledItem';
import StatusHelpItem from '../../components/paperwork/StatusHelpItem';
import IconLabeledItem from '../../components/paperwork/IconLabeledItem';
import {EventLogo4Image, JamesSpriegImage} from '../../constants/images';
import SignSuccessModal from '../../components/paperwork/SignSuccessModal';
import SignViewAnnexModal from '../../components/paperwork/SignViewAnnexModal';

const SignScreen = ({navigation}) => {
  const [showSignSuccessModal, setShowSignSuccessModal] = React.useState(false);
  const [showSignViewAnnexModal, setShowSignViewAnnexModal] =
    React.useState(false);

  const handleSign = () => {
    setShowSignSuccessModal(true);
  };

  const handleViewAnnex = () => {
    setShowSignViewAnnexModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.Appbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
          </TouchableOpacity>
          <Text style={styles.AppbarTextFont}>Sign</Text>
        </View>
        <ScrollView>
          <View style={styles.ContentView}>
            <ImageLabeledItem title={'Jason Kalipa'} image={JamesSpriegImage} />
            <ImageLabeledItem
              title={'MARS Hosts Boy Martin'}
              image={EventLogo4Image}
            />
            <IconLabeledItem
              title="General Liability Waiver"
              image={DocumentsIcon}
            />
            <IconLabeledItem title="Rider" image={NameTagIcon} />
            <IconLabeledItem title="View Document" image={FullScreenIcon} />
            <IconLabeledItem
              title="View Annex"
              image={FullScreenIcon}
              onPress={handleViewAnnex}
            />
            <StatusHelpItem
              image={PeopleIcon}
              title="Who must sign?"
              content="Riders, trainers, owners, coaches or legal guardians associated with a horse competing in this event."
            />
            <StatusHelpItem
              image={ErrorIcon}
              title="Disclaimer"
              content="By clicking sign, you confirm you have read and agree to the terms and conditions in this document and the attached annex."
            />
          </View>
        </ScrollView>

        <View style={styles.BottomButton}>
          <Pressable
            style={[styles.Button, styles.ButtonApply]}
            onPress={handleSign}>
            <Text style={[styles.TextStyle, styles.TextApply]}>Sign</Text>
          </Pressable>
        </View>
      </View>
      <SignSuccessModal
        modalVisible={showSignSuccessModal}
        setModalVisible={setShowSignSuccessModal}
      />
      <SignViewAnnexModal
        modalVisible={showSignViewAnnexModal}
        setModalVisible={setShowSignViewAnnexModal}
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
    marginBottom: 60,
  },
  Button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 10,
    width: width - 48,
  },
});

export default SignScreen;
