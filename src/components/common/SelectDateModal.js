import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  ScrollView,
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
import {Calendar} from 'react-native-calendars';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SelectDateModal = ({modalVisible, setModalVisible}) => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.OverlayStyle} />
          <View style={styles.ModalView}>
            <View style={styles.Appbar}>
              <Text style={styles.ModalTitleFont}>Select date</Text>
            </View>
            <ScrollView>
              <View style={styles.ModalContentView}>
                <Calendar
                  onDayPress={day => {
                    setSelected(day.dateString);
                  }}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedDotColor: COLOR_PINK,
                    },
                  }}
                  theme={{
                    arrowColor: COLOR_PINK,
                    todayTextColor: COLOR_PINK, // Add this
                    selectedDayTextColor: COLOR_PINK,
                    'stylesheet.calendar.header': {
                      arrowImage: {tintColor: COLOR_PINK}, // For arrow color
                    },
                    'stylesheet.day.basic': {
                      selected: {
                        backgroundColor: COLOR_PINK,
                        borderRadius: 32,
                      },
                      selectedText: {
                        color: COLOR_WHITE,
                      },
                    },
                  }}
                />
              </View>
            </ScrollView>

            <View style={styles.BottomButton}>
              <Pressable style={[styles.Button, styles.ButtonApply]}>
                <Text style={[styles.TextStyle, styles.TextApply]}>Save</Text>
              </Pressable>
              <Pressable
                style={[styles.Button, styles.ButtonCancel]}
                onPress={() => setModalVisible(false)}>
                <Text style={[styles.TextStyle, styles.TextCancel]}>
                  Cancel
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
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
  Appbar: {
    height: 36,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontFamily: FONT_REGULAR,
    fontSize: 25,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
  },
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 30,
    width: width - 48,
  },
  ModalContentView: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    marginTop: 20,
  },
});

export default SelectDateModal;
