import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import TouchableIconTextItem from '../../../components/following/TouchableIconTextItem';
import {
  AroundGlobeWeakIcon,
  BiotechWeakIcon,
  ElectronicsWeakIcon,
  GenderWeakIcon,
  GlobeWeakIcon,
  LaurelWreathWeakIcon,
  MindMapWeakIcon,
  NameTagWeakIcon,
  PaintBrushWeakIcon,
  PaintPaletteWeakIcon,
  RulerVerticalWeakIcon,
  TearOffCalendarWeakIcon,
  YearOfHorseWeakIcon,
} from '../../../constants/icons';
import IconLabeledText from '../../../components/following/IconLabeledText';
import CompetitionNumbers from '../../../constants/following/competitionNumbers';
import SelectNationalityModal from '../../../components/following/SelectNationalityModal';
import {ModalContext} from '../../../providers/ModalProvider';
import SelectItemsModal from '../../../components/following/SelectItemsModal';
import DisciplinesData from '../../../constants/following/disciplines';
import ZonesData from '../../../constants/following/zones';
import BreedsData from '../../../constants/following/breeds';
import HeightsData from '../../../constants/following/heights';
import SexesData from '../../../constants/following/sexes';
import ColoringsData from '../../../constants/following/colorings';
import MarkingsData from '../../../constants/following/markings';

const HorseDetailView = ({navigation}) => {
  const [, , , , , , , , competitionNumberData, setCompetitionNumberData] =
    useContext(ModalContext);
  const [name, setName] = useState('');
  const [microchipNumber, setMicrochipNumber] = useState('');
  const [dnaNumber, setDNANumber] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [showSelectNationalityModal, setShowSelectNationalityModal] =
    useState(false);
  const [selectItemsModalTitle, setSelectItemsModalTitle] = useState('');
  const [selectItemsModalData, setSelectItemsModalData] = useState([]);
  const [showSelectItemsModal, setShowSelectItemsModal] = useState(false);

  const handleCompetitionNumberPress = index => {
    setCompetitionNumberData(CompetitionNumbers[index]);
    navigation.navigate('CompetitionNumberScreen');
  };

  const handleSelectNationalityModal = () => {
    setShowSelectNationalityModal(true);
  };

  const handleSelectItemsModal = (title, data) => {
    setSelectItemsModalTitle(title);
    setSelectItemsModalData(data);
    setShowSelectItemsModal(true);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.Wrapper}>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>government numbers</Text>
            <TouchableIconTextItem
              icon={LaurelWreathWeakIcon}
              text={'USEF number'}
              rightIconVisible={true}
              onPress={() => navigation.navigate('HorseUSEFNumberScreen')}
            />
            <TouchableIconTextItem
              icon={LaurelWreathWeakIcon}
              text={'FEI number'}
              rightIconVisible={true}
              onPress={() => navigation.navigate('HorseFEINumberScreen')}
            />
          </View>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>Horse DETAILS</Text>
            <IconLabeledText
              icon={NameTagWeakIcon}
              placeholder={'Name...'}
              rightIconVisible={false}
              value={name}
              onChangeText={text => setName(text)}
            />
            <TouchableIconTextItem
              icon={BiotechWeakIcon}
              text={'Breed...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => handleSelectItemsModal('Bread', BreedsData)}
            />
            <TouchableIconTextItem
              icon={RulerVerticalWeakIcon}
              text={'Height...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => handleSelectItemsModal('Height', HeightsData)}
            />
            <TouchableIconTextItem
              icon={TearOffCalendarWeakIcon}
              text={'Foal date...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
            />
            <TouchableIconTextItem
              icon={GenderWeakIcon}
              text={'Sex...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => handleSelectItemsModal('Sex', SexesData)}
            />
            <TouchableIconTextItem
              icon={YearOfHorseWeakIcon}
              text={'Discipline...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() =>
                handleSelectItemsModal('Discipline', DisciplinesData)
              }
            />
            <TouchableIconTextItem
              icon={MindMapWeakIcon}
              text={'Zone...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => handleSelectItemsModal('Zone', ZonesData)}
            />
            <TouchableIconTextItem
              icon={PaintPaletteWeakIcon}
              text={'Coloring....'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => handleSelectItemsModal('Coloring', ColoringsData)}
            />
            <TouchableIconTextItem
              icon={PaintBrushWeakIcon}
              text={'Markings...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => handleSelectItemsModal('Markings', MarkingsData)}
            />
            <TouchableIconTextItem
              icon={GlobeWeakIcon}
              text={'Country of origin...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={handleSelectNationalityModal}
            />
          </View>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>OTHER NUMBERS</Text>
            <IconLabeledText
              icon={ElectronicsWeakIcon}
              placeholder={'Microchip number...'}
              rightIconVisible={false}
              value={microchipNumber}
              onChangeText={text => setMicrochipNumber(text)}
            />
            <IconLabeledText
              icon={BiotechWeakIcon}
              placeholder={'DNA case number...'}
              rightIconVisible={false}
              value={dnaNumber}
              onChangeText={text => setDNANumber(text)}
            />
            <IconLabeledText
              icon={AroundGlobeWeakIcon}
              placeholder={'Passport number...'}
              rightIconVisible={false}
              value={passportNumber}
              onChangeText={text => setPassportNumber(text)}
            />
          </View>

          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>COMPETITION NUMBERS</Text>
            {CompetitionNumbers?.map((item, index) => {
              return (
                <TouchableIconTextItem
                  key={index}
                  icon={item.icon}
                  text={item.title}
                  rightIconVisible={true}
                  onPress={() => handleCompetitionNumberPress(index)}
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
      <SelectItemsModal
        modalVisible={showSelectItemsModal}
        setModalVisible={setShowSelectItemsModal}
        title={selectItemsModalTitle}
        data={selectItemsModalData}
        govermenceIconVisible={true}
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

export default HorseDetailView;
