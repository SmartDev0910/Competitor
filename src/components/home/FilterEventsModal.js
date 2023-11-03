import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
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
  ArrowRightIcon,
  CalendarIcon,
  YearOfHorseIcon,
} from '../../constants/icons';
import RoundPane from './RoundPane';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FilterEventsModal = ({modalVisible, setModalVisible}) => {
  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Filter Events</Text>
          <Text style={styles.SubTitleFont}>Category</Text>
          <View style={styles.CategoryView}>
            {Categories?.map((item, index) => {
              return (
                <CategoryItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  style={styles.CategoryItem}
                />
              );
            })}
          </View>
          <Text style={[styles.SubTitleFont, styles.TimeDateView]}>
            Discipline
          </Text>
          <Discipline
            icon={YearOfHorseIcon}
            text="Select disciplines..."
            rightIcon={ArrowRightIcon}
          />
          <Text style={[styles.SubTitleFont, styles.TimeDateFont]}>
            Time & Date
          </Text>
          <View style={styles.TimeDateView}>
            <RoundPane text="This Week" />
            <RoundPane text="This Month" />
            <RoundPane text="Next Month" />
          </View>
          <Discipline
            icon={CalendarIcon}
            text="Choose from calendar"
            rightIcon={ArrowRightIcon}
          />
          <Pressable style={[styles.Button, styles.ButtonApply]}>
            <Text style={[styles.TextStyle, styles.TextApply]}>Apply</Text>
          </Pressable>
          <Pressable
            style={[styles.Button, styles.ButtonCancel]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={[styles.TextStyle, styles.TextCancel]}>Cancel</Text>
          </Pressable>
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
    paddingHorizontal: 24,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
    marginVertical: 5,
    gap: 4,
  },
});

export default FilterEventsModal;
