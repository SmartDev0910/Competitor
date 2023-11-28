import React, {useState, useEffect} from 'react';
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
import PurchasePaySuccessModal from './PurchasePaySuccessModal';
import PaymentCardItem from './PaymentCardItem';
import CardNumbers from '../../constants/events/cardNumbers';
import AddNewCardItem from './AddNewCardItem';
import AddNewCardModal from './AddNewCardModal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PurchaseSelectPaymentMethodModal = ({
  modalVisible,
  setModalVisible,
  navigation,
}) => {
  const [showPaySuccessModal, setShowPaySuccessModal] = useState(false);
  const [showAddNewCardModal, setShowAddNewCardModal] = useState(false);
  const [selectedCardItem, setSelectedCardItem] = useState(-1);
  const [reopenParentModal, setReopenParentModal] = useState(false);

  const handleShowPaySuccessModal = () => {
    setModalVisible(false);
    setShowPaySuccessModal(true);
  };

  const handleAddNewCardModal = () => {
    setModalVisible(false);
    setShowAddNewCardModal(true);
    setReopenParentModal(true); // set flag when opening the SelectItemsModal
  };

  const handleCardItemPress = index => {
    setSelectedCardItem(index);
  };

  useEffect(() => {
    if (!showAddNewCardModal && reopenParentModal) {
      setModalVisible(true);
      setReopenParentModal(false); // reset to default
    }
  }, [showAddNewCardModal, reopenParentModal]);

  return (
    <>
      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.OverlayStyle} />
          <View style={styles.ModalView}>
            <Text style={styles.ModalTitleFont}>Select payment method</Text>
            <View style={styles.ModalContentView}>
              {CardNumbers.map((item, index) => {
                return (
                  <PaymentCardItem
                    key={index}
                    cardNumber={item}
                    selected={selectedCardItem === index}
                    onPress={() => handleCardItemPress(index)}
                  />
                );
              })}
              <AddNewCardItem onPress={() => handleAddNewCardModal()} />
            </View>

            <View style={styles.BottomButton}>
              <Pressable
                style={[
                  styles.Button,
                  selectedCardItem >= 0
                    ? styles.ButtonApply
                    : styles.ButtonReadyApply,
                ]}
                onPress={() => handleShowPaySuccessModal()}>
                <Text
                  style={[
                    styles.TextStyle,
                    selectedCardItem >= 0
                      ? styles.TextApply
                      : styles.TextReadyApply,
                  ]}>
                  pay $336
                </Text>
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
      <AddNewCardModal
        modalVisible={showAddNewCardModal}
        setModalVisible={setShowAddNewCardModal}
      />
      <PurchasePaySuccessModal
        modalVisible={showPaySuccessModal}
        setModalVisible={setShowPaySuccessModal}
        navigation={navigation}
      />
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
    marginTop: height - 650,
    width: width,
    height: 650,
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
  ButtonReadyApply: {
    borderWidth: 1,
    borderColor: COLOR_PINK,
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
  TextReadyApply: {
    color: COLOR_PINK,
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
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 30,
    width: width - 48,
  },
  ModalContentView: {
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
});

export default PurchaseSelectPaymentMethodModal;
