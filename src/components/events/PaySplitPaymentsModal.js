import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_MODAL_OVERLAY,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import PaySuccessModal from './PaySuccessModal';
import PaymentCardItem from './PaymentCardItem';
import CardNumbers from '../../constants/events/cardNumbers';
import AddNewCardItem from './AddNewCardItem';
import AddNewCardModal from './AddNewCardModal';
import StatusHelpItem from './StatusHelpItem';
import {ErrorIcon, UsDollarCircledIcon, UserIcon} from '../../constants/icons';
import Divider from '../home/Divider';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PaySplitPaymentsModal = ({modalVisible, setModalVisible}) => {
  const [showPaySuccessModal, setShowPaySuccessModal] = useState(false);
  const [showAddNewCardModal, setShowAddNewCardModal] = useState(false);
  const [selectedCardItem, setSelectedCardItem] = React.useState(-1);

  const handleShowPaySuccessModal = () => {
    setModalVisible(false);
    setShowPaySuccessModal(true);
  };

  const handleAddNewCardModal = () => {
    setModalVisible(false);
    setShowAddNewCardModal(true);
  };

  const handleCardItemPress = index => {
    setSelectedCardItem(index);
  };

  return (
    <>
      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.OverlayStyle} />
          <View style={styles.ModalView}>
            <Text style={styles.ModalTitleFont}>Pay</Text>
            <ScrollView>
              <View style={styles.ModalContentView}>
                <View style={styles.InfoRowView}>
                  <Text style={styles.InfoRowTitleFont}>
                    Recipients will be charged:
                  </Text>
                  <View style={styles.InfoItemRowView}>
                    <Image source={UserIcon} style={styles.InfoItemImage} />
                    <Text style={styles.InfoItemTitleFont}>
                      Jaylin Williams, $3,086
                    </Text>
                  </View>
                  <View style={styles.InfoItemRowView}>
                    <Image source={UserIcon} style={styles.InfoItemImage} />
                    <Text style={styles.InfoItemTitleFont}>
                      Jennery Trotter, $3,930
                    </Text>
                  </View>
                  <View style={styles.InfoItemRowView}>
                    <Image source={ErrorIcon} style={styles.InfoItemImage} />
                    <Text style={styles.InfoItemTitleFont}>
                      Recipients will be registered and sent bill when you click
                      pay.
                    </Text>
                  </View>
                </View>
                <View style={styles.InfoRowView}>
                  <Text style={styles.InfoRowTitleFont}>
                    You will be charged:
                  </Text>
                  <View style={styles.InfoItemRowView}>
                    <Image
                      source={UsDollarCircledIcon}
                      style={styles.InfoItemImage}
                    />
                    <Text style={styles.InfoItemTitleFont}>$3,168</Text>
                  </View>
                  <View style={styles.InfoItemRowView}>
                    <Image source={ErrorIcon} style={styles.InfoItemImage} />
                    <Text style={styles.InfoItemTitleFont}>
                      Payment required to complete registration
                    </Text>
                  </View>
                </View>
                <Divider style={styles.Divider} />
                <Text style={styles.SelectPaymentTitleFont}>
                  Select payment method
                </Text>
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
            </ScrollView>

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
                  PAY $10,175
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
      <PaySuccessModal
        modalVisible={showPaySuccessModal}
        setModalVisible={setShowPaySuccessModal}
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
  },
  ModalContentView: {
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  InfoRowView: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR_EVENT_BORDER,
    marginVertical: 5,
  },
  Divider: {
    height: 1,
    backgroundColor: COLOR_EVENT_BORDER,
    marginTop: 20,
    marginBottom: 20,
  },
  InfoRowTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  InfoItemRowView: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 5,
  },
  InfoItemImage: {
    width: 16,
    height: 20,
  },
  InfoItemTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    flexWrap: 'wrap',
  },
  SelectPaymentTitleFont: {
    marginBottom: 20,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
});

export default PaySplitPaymentsModal;
