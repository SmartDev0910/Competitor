import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {FONT_REGULAR} from '../../../../constants/fonts';
import {
  AroundGlobeWeakIcon,
  ArrowLeftIcon,
  TearOffCalendarWeakIcon,
} from '../../../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_FONT_COMMENT,
} from '../../../../constants/colors';
import TouchableIconTextItem from '../../../../components/following/TouchableIconTextItem';
import CameraRollModal from '../../../../components/following/CameraRollModal';
import TouchableAddImageItem from '../../../../components/following/TouchableAddImageItem';

const EndorsementLetterScreen = ({navigation}) => {
  const [showCameraRollModal, setShowCameraRollModal] = useState(false);

  const handleCameraRollModal = () => {
    setShowCameraRollModal(true);
  };

  return (
    <>
      <ScrollView style={styles.Wrapper}>
        <View>
          <View style={styles.Appbar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
            </TouchableOpacity>
            <Text style={styles.AppbarTextFont}>Endorsement Letter</Text>
          </View>
          <View style={styles.ContentView}>
            <Text style={styles.DescTextFont}>
              {`Exhibitors competing in a foreign sanctioned competiton need to provide proof of endorsement by their national federation.`}
            </Text>
            <TouchableAddImageItem
              icon={AroundGlobeWeakIcon}
              text={'Add image'}
              style={styles.TouchableIconTextItem}
              onPress={handleCameraRollModal}
            />
            <TouchableIconTextItem
              icon={TearOffCalendarWeakIcon}
              text={'Select expiration date'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
            />
          </View>
        </View>
      </ScrollView>
      <CameraRollModal
        modalVisible={showCameraRollModal}
        setModalVisible={setShowCameraRollModal}
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
  },
  DescTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 25,
    marginBottom: 20,
  },
  TouchableIconTextItem: {
    color: COLOR_FONT_COMMENT,
  },
});

export default EndorsementLetterScreen;
