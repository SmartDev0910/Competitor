import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import {FONT_REGULAR} from '../../../../constants/fonts';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_BUTTON_DEFAULT,
  COLOR_PINK,
  COLOR_BUTTON_CANCEL,
  COLOR_EVENT_BORDER,
} from '../../../../constants/colors';
import {ArrowLeftIcon} from '../../../../constants/icons';
import LabeledTextInput from '../../../../components/common/LabeledTextInput';

const AddCardScreen = ({navigation}) => {
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
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
        </TouchableOpacity>
        <Text style={styles.AppbarTextFont}>Add card</Text>
      </View>
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
              placeholder="XXXXX"
              value={zipCode}
              onChangeText={text => setZipCode(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.BottomButton}>
        {validateCardInfo() ? (
          <Pressable style={[styles.Button, styles.ButtonApply]}>
            <Text style={[styles.TextStyle, styles.TextApply]}>Save</Text>
          </Pressable>
        ) : (
          ''
        )}
        <Pressable style={[styles.Button, styles.ButtonCancel]}>
          <Text style={[styles.TextStyle, styles.TextCancel]}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  Appbar: {
    height: 36,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  AppbarButton: {
    width: 22,
    height: 22,
  },
  AppbarTextFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_DEFAULT,
    fontSize: 24,
    marginLeft: 7,
  },
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 10,
    width: width - 48,
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
  ButtonCancel: {
    backgroundColor: COLOR_BUTTON_CANCEL,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
    marginTop: 20,
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
  ModalContentView: {
    marginTop: 30,
    paddingHorizontal: 24,
    flexDirection: 'column',
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

export default AddCardScreen;
