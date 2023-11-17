import React, {useContext, useState} from 'react';
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
  SettingsIcon,
  TearOffCalendarIcon,
} from '../../../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_FONT_COMMENT,
} from '../../../../constants/colors';
import TouchableIconTextItem from '../../../../components/following/TouchableIconTextItem';
import {ModalContext} from '../../../../providers/ModalProvider';
import ManageCompetitionNumberModal from '../../../../components/following/ManageCompetitionNumberModal';
import EligibilityStatusData from '../../../../constants/following/eligibilityStatus';
import SelectableSyncEligibilityItem from '../../../../components/following/SelectableSyncEligibilityItem';

const SyncEligibilityScreen = ({navigation}) => {
  const [showManageModal, setShowManageModal] = useState(false);
  const [, , , , , , , , competitionNumberIndex, setCompetitionNumberIndex] =
    useContext(ModalContext);

  const handleManageModal = () => {
    setShowManageModal(true);
  };

  return (
    <>
      <ScrollView style={styles.Wrapper}>
        <View>
          <View style={styles.Appbar}>
            <View style={styles.TitleView}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
              </TouchableOpacity>
              <Text style={styles.AppbarTextFont}>
                {EligibilityStatusData[competitionNumberIndex].title}
              </Text>
            </View>
          </View>
          <View style={styles.ContentView}>
            <SelectableSyncEligibilityItem
              image={EligibilityStatusData[competitionNumberIndex].image}
              selected={EligibilityStatusData[competitionNumberIndex].selected}
              title={'Status:'}
              value={EligibilityStatusData[competitionNumberIndex].status}
            />
            <SelectableSyncEligibilityItem
              image={EligibilityStatusData[competitionNumberIndex].image}
              selected={EligibilityStatusData[competitionNumberIndex].selected}
              title={'Details:'}
              value={EligibilityStatusData[competitionNumberIndex].details}
            />
            <SelectableSyncEligibilityItem
              icon={TearOffCalendarIcon}
              selected={EligibilityStatusData[competitionNumberIndex].selected}
              title={'Expiration date:'}
              value={EligibilityStatusData[competitionNumberIndex].expDate}
            />
            <TouchableIconTextItem
              icon={SettingsIcon}
              text={'Manage'}
              downIconVisible={true}
              onPress={handleManageModal}
            />
          </View>
        </View>
      </ScrollView>
      <ManageCompetitionNumberModal
        modalVisible={showManageModal}
        setModalVisible={setShowManageModal}
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
    justifyContent: 'space-between',
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
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  RightIconView: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: COLOR_FONT_DEFAULT,
    borderWidth: 1,
  },
  RightIcon: {
    width: 14,
    height: 14,
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

export default SyncEligibilityScreen;