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
  DoctorsBagWeakIcon,
  ImageWeakIcon,
} from '../../../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_FONT_COMMENT,
} from '../../../../constants/colors';
import TouchableAddImageItem from '../../../../components/following/TouchableAddImageItem';
import CameraRollModal from '../../../../components/following/CameraRollModal';
import TouchableIconTextItem from '../../../../components/following/TouchableIconTextItem';
import SelectItemsModal from '../../../../components/following/SelectItemsModal';
import HealthRecordsData from '../../../../constants/following/healthRecords';

const HealthRecordsScreen = ({navigation}) => {
  const [showCameraRollModal, setShowCameraRollModal] = useState(false);
  const [selectItemsModalTitle, setSelectItemsModalTitle] = useState('');
  const [selectItemsModalData, setSelectItemsModalData] = useState([]);
  const [showSelectItemsModal, setShowSelectItemsModal] = useState(false);

  const handleCameraRollModal = () => {
    setShowCameraRollModal(true);
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
            <Text style={styles.AppbarTextFont}>Health records</Text>
          </View>
          <View style={styles.ContentView}>
            <TouchableAddImageItem
              icon={ImageWeakIcon}
              text={'Add image'}
              style={styles.TouchableIconTextItem}
              onPress={handleCameraRollModal}
            />
            <TouchableIconTextItem
              icon={DoctorsBagWeakIcon}
              text={'Health status current?'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() =>
                handleSelectItemsModal(
                  'Health status current?',
                  HealthRecordsData,
                )
              }
            />
          </View>
        </View>
      </ScrollView>
      <CameraRollModal
        modalVisible={showCameraRollModal}
        setModalVisible={setShowCameraRollModal}
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

export default HealthRecordsScreen;
