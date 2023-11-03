import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_FONT_DEFAULT,
  COLOR_MODAL_OVERLAY,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import CategoryItem from './CategoryItem';
import Categories from '../../constants/home/categories';
import Discipline from './Discipline';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightPinkIcon,
  CalendarIcon,
  YearOfHorseIcon,
} from '../../constants/icons';
import RoundPane from './RoundPane';
import SliderPane from './SliderPane';
import ImageButton from './ImageButton';
import Disciplines from '../../constants/home/disciplines';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FilterEventsModal = ({modalVisible, setModalVisible}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);
  const [selectedDisciplineItems, setSelectedDisciplineItems] = useState([]);
  const [selectDiscipline, setSelectDiscipline] = useState(false);

  const handleSliderValueChange = value => {
    setSliderValue(value);
  };

  const handlePress = index => {
    if (selectedCategoryItem === index) {
      // If the selected index was already selected, deselect it
      setSelectedCategoryItem(null);
    } else {
      // Otherwise, select the touched item
      setSelectedCategoryItem(index);
    }
  };

  const handleDisciplinePress = index => {
    if (selectedDisciplineItems.includes(index)) {
      setSelectedDisciplineItems(
        selectedDisciplineItems.filter(item => item !== index),
      );
    } else {
      setSelectedDisciplineItems([...selectedDisciplineItems, index]);
    }
  };

  const handleSelectDiscipline = () => {
    setSelectDiscipline(!selectDiscipline);
  };

  const FilterEventsView = (
    <>
      <Text style={styles.SubTitleFont}>Category</Text>
      <View style={styles.CategoryView}>
        {Categories?.map((item, index) => {
          return (
            <CategoryItem
              key={index}
              icon={item.icon}
              text={item.text}
              selectedIcon={item.selectedIcon}
              selected={selectedCategoryItem === index}
              onPress={() => handlePress(index)}
              style={styles.CategoryItem}
            />
          );
        })}
      </View>
      <Text style={[styles.SubTitleFont, styles.TimeDateView]}>Discipline</Text>
      {selectedDisciplineItems.length ? (
        <Discipline
          selected={true}
          icon={Disciplines[selectedDisciplineItems[0]].icon}
          text={Disciplines[selectedDisciplineItems[0]].text}
          selectedIcon={Disciplines[selectedDisciplineItems[0]].selectedIcon}
          selectedRightIcon={ArrowRightPinkIcon}
          rightIcon={ArrowRightIcon}
          onPress={() => handleSelectDiscipline()}
        />
      ) : (
        <Discipline
          icon={YearOfHorseIcon}
          text="Select disciplines..."
          rightIcon={ArrowRightIcon}
          onPress={() => handleSelectDiscipline()}
        />
      )}

      <Text style={[styles.SubTitleFont, styles.TimeDateFont]}>
        Time & Date
      </Text>
      <View style={styles.TimeDateView}>
        <RoundPane text="This Week" style={styles.TimeDateItem} />
        <RoundPane text="This Month" style={styles.TimeDateItem} />
        <RoundPane text="Next Month" style={styles.TimeDateItem} />
      </View>
      <Discipline
        icon={CalendarIcon}
        text="Choose from calendar"
        rightIcon={ArrowRightIcon}
      />
      <SliderPane
        style={styles.SliderPane}
        title="Price"
        value={sliderValue}
        onValueChange={handleSliderValueChange}
      />
    </>
  );

  const DisciplineView = Disciplines.map((item, index) => {
    return (
      <Discipline
        key={index}
        icon={item.icon}
        text={item.text}
        selectedIcon={item.selectedIcon}
        selected={selectedDisciplineItems.includes(index)}
        onPress={() => handleDisciplinePress(index)}
        style={styles.DisciplineItem}
      />
    );
  });

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          {selectDiscipline ? (
            <View style={styles.DisciplineViewHeader}>
              <ImageButton
                source={ArrowLeftIcon}
                style={styles.BackButton}
                onPress={() => handleSelectDiscipline()}
              />
              <Text style={styles.DisciplineSelectFont}>Select discipline</Text>
            </View>
          ) : (
            <Text style={styles.ModalTitleFont}>Filter Events</Text>
          )}

          <ScrollView style={styles.ScrollView}>
            {selectDiscipline ? DisciplineView : FilterEventsView}
          </ScrollView>

          <View style={styles.BottomButton}>
            <Pressable style={[styles.Button, styles.ButtonApply]}>
              <Text style={[styles.TextStyle, styles.TextApply]}>
                {selectDiscipline ? 'Save' : 'Apply'}
              </Text>
            </Pressable>
            <Pressable
              style={[styles.Button, styles.ButtonCancel]}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.TextStyle, styles.TextCancel]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  OverlayStyle: {
    backgroundColor: COLOR_MODAL_OVERLAY,
    position: 'absolute',
    width: width,
    height: height,
  },
  ModalView: {
    marginTop: 106,
    width: width,
    height: height - 106,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  ScrollView: {
    paddingHorizontal: 24,
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
  ButtonApply: {
    backgroundColor: COLOR_PINK,
    marginTop: 20,
  },
  ButtonCancel: {
    backgroundColor: COLOR_BUTTON_CANCEL,
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
  ModalTitleFont: {
    marginBottom: 15,
    fontFamily: FONT_REGULAR,
    fontSize: 25,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
    marginHorizontal: 24,
  },
  SubTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 34,
  },
  CategoryView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  CategoryItem: {
    width: '49%',
    marginVertical: 5,
  },
  TimeDateFont: {
    marginTop: 11,
  },
  TimeDateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
  },
  TimeDateItem: {
    flex: 0.32,
  },
  SliderPane: {
    marginVertical: 10,
    width: '100%',
  },
  BottomButton: {
    marginHorizontal: 24,
  },
  DisciplineViewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 24,
  },
  BackButton: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  DisciplineSelectFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 25,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
  },
  DisciplineItem: {
    marginVertical: 6,
  },
});

export default FilterEventsModal;
