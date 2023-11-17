import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import TouchableIconTextItem from '../../../components/following/TouchableIconTextItem';
import {
  AroundGlobeWeakIcon,
  AuditWeakIcon,
  GlobeWeakIcon,
  LaurelWreathWeakIcon,
  LocationWeakIcon,
  MailWeakIcon,
  MindMapWeakIcon,
  PhoneWeakIcon,
  TearOffCalendarWeakIcon,
  UserWeakIcon,
  YearOfHorseWeakIcon,
} from '../../../constants/icons';
import IconLabeledText from '../../../components/following/IconLabeledText';
import CompetitionNumbers from '../../../constants/following/competitionNumbers';
import SelectNationalityModal from '../../../components/following/SelectNationalityModal';
import AddressModal from '../../../components/following/AddressModal';
import DisciplineModal from '../../../components/following/DisciplineModal';
import SelectStatusModal from '../../../components/following/SelectStatusModal';
import ZoneModal from '../../../components/following/ZoneModal';

const UserView = ({navigation}) => {
  const [showSelectNationalityModal, setShowSelectNationalityModal] =
    useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showDisciplineModal, setShowDisciplineModal] = useState(false);
  const [showSelectStatusModal, setShowSelectStatusModal] = useState(false);
  const [showZoneModal, setShowZoneModal] = useState(false);

  const handleSelectNationalityModal = () => {
    setShowSelectNationalityModal(true);
  };

  const handleAddressModal = () => {
    setShowAddressModal(true);
  };

  const handleDisciplineModal = () => {
    setShowDisciplineModal(true);
  };

  const handleSelectStatusModal = () => {
    setShowSelectStatusModal(true);
  };

  const handleShowZoneModal = () => {
    setShowZoneModal(true);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.Wrapper}>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>eligibility details</Text>
            <TouchableIconTextItem
              icon={LaurelWreathWeakIcon}
              text={'USEF number'}
              rightIconVisible={true}
              onPress={() => navigation.navigate('USEFNumberScreen')}
            />
            <TouchableIconTextItem
              icon={LaurelWreathWeakIcon}
              text={'FEI number'}
              rightIconVisible={true}
              onPress={() => navigation.navigate('FEINumberScreen')}
            />
            <TouchableIconTextItem
              icon={AuditWeakIcon}
              text={'SafeSport training'}
              rightIconVisible={true}
              onPress={() => navigation.navigate('SafeSportScreen')}
            />
            <TouchableIconTextItem
              icon={AuditWeakIcon}
              text={'Background check'}
              rightIconVisible={true}
              onPress={() => navigation.navigate('BackgroundCheckScreen')}
            />
          </View>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>PERSONAL DETAILS</Text>
            <IconLabeledText
              icon={UserWeakIcon}
              placeholder={'First name...'}
              rightIconVisible={true}
            />
            <IconLabeledText
              icon={UserWeakIcon}
              placeholder={'Last name...'}
              rightIconVisible={true}
            />
            <TouchableIconTextItem
              icon={GlobeWeakIcon}
              text={'Select nationality...'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={handleSelectNationalityModal}
            />
            <TouchableIconTextItem
              icon={TearOffCalendarWeakIcon}
              text={'Select date of birth...'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
            />
            <TouchableIconTextItem
              icon={LocationWeakIcon}
              text={'Enter address...'}
              rightIconVisible={false}
              style={styles.TouchableIconTextItem}
              onPress={handleAddressModal}
            />
            <IconLabeledText
              icon={PhoneWeakIcon}
              placeholder={'Enter number...'}
              rightIconVisible={true}
            />
            <IconLabeledText
              icon={MailWeakIcon}
              placeholder={'Enter email address...'}
              rightIconVisible={true}
            />
          </View>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>COMPETITION DETAILS</Text>
            <TouchableIconTextItem
              icon={YearOfHorseWeakIcon}
              text={'Select disciplines...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={handleDisciplineModal}
            />
            <TouchableIconTextItem
              icon={MindMapWeakIcon}
              text={'Select zone...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={handleShowZoneModal}
            />
            <TouchableIconTextItem
              icon={YearOfHorseWeakIcon}
              text={'Select status...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={handleSelectStatusModal}
            />
            <TouchableIconTextItem
              icon={AroundGlobeWeakIcon}
              text={'Add Foreign Endorsement Letter'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => navigation.navigate('EndorsementLetterScreen')}
            />
          </View>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>COMPETITION NUMBERS</Text>
            {CompetitionNumbers?.map((item, index) => {
              return (
                <TouchableIconTextItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  rightIconVisible={true}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <SelectNationalityModal
        modalVisible={showSelectNationalityModal}
        setModalVisible={setShowSelectNationalityModal}
      />
      <AddressModal
        modalVisible={showAddressModal}
        setModalVisible={setShowAddressModal}
      />
      <DisciplineModal
        modalVisible={showDisciplineModal}
        setModalVisible={setShowDisciplineModal}
      />
      <SelectStatusModal
        modalVisible={showSelectStatusModal}
        setModalVisible={setShowSelectStatusModal}
      />
      <ZoneModal
        modalVisible={showZoneModal}
        setModalVisible={setShowZoneModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 34,
    letterSpacing: 0.16,
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 10,
  },
  PartView: {
    flexDirection: 'column',
  },
  TouchableIconTextItem: {
    color: COLOR_FONT_COMMENT,
  },
});

export default UserView;
