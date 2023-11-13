import React, {useState} from 'react';
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
  COLOR_EVENT_BORDER,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import LabeledTextInput from '../common/LabeledTextInput';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddNewCardModal = ({modalVisible, setModalVisible}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCVV] = useState('');
  const [zipCode, setZipCode] = useState('');

  const validateCardInfo = () => {
    if (
      cardNumber !== '' &&
      expiration !== '' &&
      cvv !== '' &&
      zipCode !== ''
    ) {
      return true;
    } else return false;
  };

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Add new card</Text>
          <View style={styles.ModalContentView}>
            <View style={styles.CardWrapper}>
              <View>
                <LabeledTextInput
                  label="Card number"
                  value={cardNumber}
                  onChangeText={text => setCardNumber(text)}
                  placeholder="0000-0000-0000-0000"
                />
              </View>
              <View style={styles.CardInfoRow}>
                <LabeledTextInput
                  label="Expiration"
                  placeholder="MM/YY"
                  value={expiration}
                  onChangeText={text => setExpiration(text)}
                />
                <LabeledTextInput
                  label="CVV"
                  placeholder="123"
                  value={cvv}
                  onChangeText={text => setCVV(text)}
                />
                <LabeledTextInput
                  label="ZIP code"
                  placeholder="XXX"
                  value={zipCode}
                  onChangeText={text => setZipCode(text)}
                />
              </View>
            </View>
          </View>

          <View style={styles.BottomButton}>
            <Pressable
              style={[
                styles.Button,
                validateCardInfo()
                  ? styles.ButtonApply
                  : styles.ButtonReadyApply,
              ]}>
              <Text
                style={[
                  styles.TextStyle,
                  validateCardInfo() ? styles.TextApply : styles.TextReadyApply,
                ]}>
                SAVE
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
    marginTop: height - 460,
    width: width,
    height: 460,
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
  HelpTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  CardWrapper: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR_EVENT_BORDER,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  CardInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
});

export default AddNewCardModal;
