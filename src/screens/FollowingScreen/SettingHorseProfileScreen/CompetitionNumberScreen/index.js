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
  LaurelWreathIcon,
  TearOffCalendarWeakIcon,
} from '../../../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_FONT_COMMENT,
} from '../../../../constants/colors';
import IconLabeledText from '../../../../components/following/IconLabeledText';
import TouchableIconTextItem from '../../../../components/following/TouchableIconTextItem';
import GovermentRecordsModal from '../../../../components/following/GovermentRecordsModal';
import {ModalContext} from '../../../../providers/ModalProvider';
import SelectDateModal from '../../../../components/common/SelectDateModal';

const CompetitionNumberScreen = ({navigation}) => {
  const [comNumber, setComNumber] = useState('');
  const [showGovermentRecordsModal, setShowGovermentRecordsModal] =
    useState(false);
  const [showSelectDateModal, setShowSelectDateModal] = useState(false);
  const [, , , , , , , , competitionNumberData, setCompetitionNumberData] =
    useContext(ModalContext);

  const handleGovermentRecordsModal = () => {
    setShowGovermentRecordsModal(true);
  };

  const handleSelectDateModal = () => {
    setShowSelectDateModal(true);
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
                {competitionNumberData?.title}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.RightIconView}
              onPress={handleGovermentRecordsModal}>
              <Image source={LaurelWreathIcon} style={styles.RightIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.ContentView}>
            <IconLabeledText
              icon={competitionNumberData?.icon}
              placeholder={'Enter number...'}
              rightIconVisible={false}
              value={comNumber}
              onChangeText={text => setComNumber(text)}
            />
            <TouchableIconTextItem
              icon={TearOffCalendarWeakIcon}
              text={'Select expiration date'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={handleSelectDateModal}
            />
          </View>
        </View>
      </ScrollView>
      <GovermentRecordsModal
        modalVisible={showGovermentRecordsModal}
        setModalVisible={setShowGovermentRecordsModal}
        value={comNumber}
      />
      <SelectDateModal
        modalVisible={showSelectDateModal}
        setModalVisible={setShowSelectDateModal}
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

export default CompetitionNumberScreen;
