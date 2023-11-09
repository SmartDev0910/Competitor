import React from 'react';
import {View, Text, Pressable, Dimensions, StyleSheet} from 'react-native';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_SEARCH_TEXT,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import ClassItem from '../../../components/events/ClassItem';
import Classes from '../../../constants/events/classes';
import ManageModal from '../../../components/events/ManageModal';
import {ModalContext} from '../../../providers/ModalProvider';
import ScratchSuccessModal from '../../../components/events/ScratchSuccessModal';

const ClassesView = ({navigation}) => {
  const [showManageModal, setShowManageModal] = React.useState(false);
  const [showScratchSuccessModal, setShowScratchSuccessModal] =
    React.useState(false);
  const [selectedClassItems, setSelectedClassItems] = React.useState([]);

  const [, , , , , , showScratchView, setShowScratchView] =
    React.useContext(ModalContext);

  const handleManagePress = () => {
    setShowManageModal(true);
  };

  const handleScratchPress = () => {
    setShowScratchSuccessModal(true);
    setShowScratchView(false);
  };

  const handleClosePress = () => {
    setShowScratchView(false);
  };

  const handleClassItemPress = index => {
    if (selectedClassItems.includes(index)) {
      setSelectedClassItems(selectedClassItems.filter(item => item !== index));
    } else {
      setSelectedClassItems([...selectedClassItems, index]);
    }
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>3 classes, $240</Text>
          <Text style={styles.HeadFont} onPress={handleManagePress}>
            Manage
          </Text>
        </View>
        {Classes.map((item, index) => {
          return (
            <ClassItem
              key={index}
              title={item.title}
              match={item.match}
              date={item.date}
              price={item.price}
              scratched={showScratchView}
              selected={selectedClassItems.includes(index)}
              onPress={() => handleClassItemPress(index)}
            />
          );
        })}
        {showScratchView ? (
          <>
            <Pressable
              style={[
                styles.Button,
                selectedClassItems.length
                  ? styles.ButtonScratchSelected
                  : styles.ButtonScratch,
              ]}
              onPress={handleScratchPress}>
              <Text
                style={[
                  styles.TextStyle,
                  selectedClassItems.length
                    ? styles.TextScratchSelected
                    : styles.TextScratch,
                ]}>
                Scratch {selectedClassItems.length ? '$80' : ''}
              </Text>
            </Pressable>
            <Pressable
              style={[styles.Button, styles.ButtonCancel]}
              onPress={handleClosePress}>
              <Text style={[styles.TextStyle, styles.TextCancel]}>Close</Text>
            </Pressable>
          </>
        ) : (
          ''
        )}
      </View>
      <ManageModal
        modalVisible={showManageModal}
        setModalVisible={setShowManageModal}
      />
      <ScratchSuccessModal
        modalVisible={showScratchSuccessModal}
        setModalVisible={setShowScratchSuccessModal}
      />
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingTop: 12,
    backgroundColor: COLOR_WHITE,
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 34,
  },
  Button: {
    borderRadius: 10,
    padding: 10,
    width: width - 48,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 24,
    position: 'absolute',
  },
  ButtonScratch: {
    backgroundColor: COLOR_WHITE,
    borderWidth: 1,
    borderColor: COLOR_PINK,
    bottom: 65,
  },
  ButtonScratchSelected: {
    backgroundColor: COLOR_PINK,
    bottom: 65,
  },
  ButtonCancel: {
    backgroundColor: COLOR_BUTTON_CANCEL,
    bottom: 0,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextScratch: {
    color: COLOR_PINK,
  },
  TextScratchSelected: {
    color: COLOR_WHITE,
  },
  TextCancel: {
    color: COLOR_BUTTON_DEFAULT,
  },
});

export default ClassesView;
