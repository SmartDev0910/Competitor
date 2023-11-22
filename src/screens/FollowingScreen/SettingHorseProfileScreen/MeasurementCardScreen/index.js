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
  ArrowLeftIcon,
  ImageWeakIcon,
  LengthWeakIcon,
  TearOffCalendarWeakIcon,
} from '../../../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_FONT_COMMENT,
} from '../../../../constants/colors';
import TouchableAddImageItem from '../../../../components/following/TouchableAddImageItem';
import CameraRollModal from '../../../../components/following/CameraRollModal';
import SelectDateModal from '../../../../components/common/SelectDateModal';
import TouchableIconTextItem from '../../../../components/following/TouchableIconTextItem';
import IconLabeledText from '../../../../components/following/IconLabeledText';
import SelectItemsModal from '../../../../components/following/SelectItemsModal';
import CardTypesData from '../../../../constants/following/cardTypes';
import LeftHeelSizesData from '../../../../constants/following/leftHeelSizes';
import RightHeelSizesData from '../../../../constants/following/rightHeelSizes';
import ShodStatusData from '../../../../constants/following/shodStatus';

const MeasurementCardScreen = ({navigation}) => {
  const [showCameraRollModal, setShowCameraRollModal] = useState(false);
  const [showSelectDateModal, setShowSelectDateModal] = useState(false);
  const [selectItemsModalTitle, setSelectItemsModalTitle] = useState('');
  const [selectItemsModalData, setSelectItemsModalData] = useState([]);
  const [showSelectItemsModal, setShowSelectItemsModal] = useState(false);

  const handleCameraRollModal = () => {
    setShowCameraRollModal(true);
  };

  const handleSelectDateModal = () => {
    setShowSelectDateModal(true);
  };

  const handleSelectItemsModal = (title, data) => {
    setSelectItemsModalTitle(title);
    setSelectItemsModalData(data);
    setShowSelectItemsModal(true);
  };

  return (
    <>
      <ScrollView style={styles.Wrapper}>
        <View>
          <View style={styles.Appbar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
            </TouchableOpacity>
            <Text style={styles.AppbarTextFont}>Measurement card</Text>
          </View>
          <View style={styles.ContentView}>
            <TouchableAddImageItem
              icon={ImageWeakIcon}
              text={'Add image'}
              style={styles.TouchableIconTextItem}
              onPress={handleCameraRollModal}
            />
            <TouchableIconTextItem
              icon={TearOffCalendarWeakIcon}
              text={'Measurement date'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={handleSelectDateModal}
            />
            <TouchableIconTextItem
              icon={LengthWeakIcon}
              text={'Card type'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => handleSelectItemsModal('Card type', CardTypesData)}
            />
            <IconLabeledText
              icon={LengthWeakIcon}
              placeholder={'Enter height...'}
              rightIconVisible={false}
            />
            <TouchableIconTextItem
              icon={LengthWeakIcon}
              text={'Left heel size'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() =>
                handleSelectItemsModal('Left heel size', LeftHeelSizesData)
              }
            />
            <TouchableIconTextItem
              icon={LengthWeakIcon}
              text={'Right heel size'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() =>
                handleSelectItemsModal('Right heel size', RightHeelSizesData)
              }
            />
            <TouchableIconTextItem
              icon={LengthWeakIcon}
              text={'Shod status'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() =>
                handleSelectItemsModal('Shod status', ShodStatusData)
              }
            />
          </View>
        </View>
      </ScrollView>
      <CameraRollModal
        modalVisible={showCameraRollModal}
        setModalVisible={setShowCameraRollModal}
      />
      <SelectDateModal
        modalVisible={showSelectDateModal}
        setModalVisible={setShowSelectDateModal}
      />
      <SelectItemsModal
        modalVisible={showSelectItemsModal}
        setModalVisible={setShowSelectItemsModal}
        title={selectItemsModalTitle}
        data={selectItemsModalData}
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
  TouchableIconTextItem: {
    color: COLOR_FONT_COMMENT,
  },
});

export default MeasurementCardScreen;
