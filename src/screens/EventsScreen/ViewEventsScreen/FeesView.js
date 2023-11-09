import React from 'react';
import {
  View,
  ScrollView,
  Pressable,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
  COLOR_PINK,
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import Fees from '../../../constants/events/fees';
import FeeItem from '../../../components/events/FeeItem';
import ManageModal from '../../../components/events/ManageModal';
import {ModalContext} from '../../../providers/ModalProvider';
import ScratchSuccessModal from '../../../components/events/ScratchSuccessModal';

const FeesView = ({navigation}) => {
  const [showManageModal, setShowManageModal] = React.useState(false);
  const [showScratchSuccessModal, setShowScratchSuccessModal] =
    React.useState(false);
  const [selectedFeeItems, setSelectedFeeItems] = React.useState([]);

  const [, , , , , , showScratchView, setShowScratchView] =
    React.useContext(ModalContext);

  const handleManageButton = () => {
    setShowManageModal(true);
  };

  const handleScratchPress = () => {
    setShowScratchSuccessModal(true);
    setShowScratchView(false);
  };

  const handleClosePress = () => {
    setShowScratchView(false);
  };

  const handleFeeItemPress = index => {
    if (selectedFeeItems.includes(index)) {
      setSelectedFeeItems(selectedFeeItems.filter(item => item !== index));
    } else {
      setSelectedFeeItems([...selectedFeeItems, index]);
    }
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>17 items, $6,170</Text>
          <Text style={styles.HeadFont} onPress={handleManageButton}>
            Manage
          </Text>
        </View>
        <ScrollView>
          {Fees.map((item, index) => (
            <FeeItem
              key={index}
              title={item.title}
              price={item.price}
              detail={item.detail}
              scratched={showScratchView}
              selected={selectedFeeItems.includes(index)}
              onPress={() => handleFeeItemPress(index)}
            />
          ))}
          {showScratchView ? <View style={styles.BottomContentView} /> : ''}
        </ScrollView>
        {showScratchView ? (
          <>
            <Pressable
              style={[
                styles.Button,
                selectedFeeItems.length
                  ? styles.ButtonScratchSelected
                  : styles.ButtonScratch,
              ]}
              onPress={handleScratchPress}>
              <Text
                style={[
                  styles.TextStyle,
                  selectedFeeItems.length
                    ? styles.TextScratchSelected
                    : styles.TextScratch,
                ]}>
                Scratch {selectedFeeItems.length ? '$80' : ''}
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
  BottomContentView: {
    height: 140,
  },
});

export default FeesView;
