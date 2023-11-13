import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Appbar from './Appbar';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_SKY,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../../constants/fonts';
import SelectPaymentMethodModal from '../../../components/events/SelectPaymentMethodModal';
import {ArrowRightIcon} from '../../../constants/icons';

const PayScreen = ({navigation}) => {
  const [showSelectPaymentMethodModal, setShowSelectPaymentMethodModal] =
    React.useState(false);

  const handleSelectPaymentMethodModal = () => {
    setShowSelectPaymentMethodModal(true);
  };

  const handleSplitPayments = () => {
    navigation.navigate('RegisterSplitPaymentsScreen');
  };

  const handleSaveAndExit = () => {};

  const handleCancel = () => {};

  return (
    <>
      <View style={styles.Wrapper}>
        <Appbar title="Pay" navigation={navigation} />
        <ScrollView>
          <View style={styles.ContentView}>
            <View style={styles.PayResultView}>
              <View style={styles.PayRowView}>
                <Text style={styles.PayItemFont}>Registrations</Text>
                <Text style={styles.PayItemFont}>$775</Text>
              </View>
              <View style={styles.PayRowView}>
                <Text style={styles.PayItemFont}>Fees</Text>
                <Text style={styles.PayItemFont}>$6,750</Text>
              </View>
              <View style={styles.PayRowView}>
                <Text style={styles.PayItemFont}>Tickets</Text>
                <Text style={styles.PayItemFont}>$2,400</Text>
              </View>
              <View style={styles.PayRowView}>
                <Text style={styles.PayItemFont}>Taxes</Text>
                <Text style={styles.PayItemFont}>$250</Text>
              </View>
              <View style={styles.PayRowView}>
                <Text style={styles.PayTotalTextFont}>Grand Total</Text>
                <Text style={styles.PayTotalTextFont}>$10,175</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.SplitPaymentView}
              onPress={handleSplitPayments}>
              <Text style={styles.SplitPaymentTextFont}>Split Payments</Text>
              <Image source={ArrowRightIcon} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.ActionView}>
          <Pressable
            style={[styles.Button, styles.ButtonApply]}
            onPress={handleSelectPaymentMethodModal}>
            <Text style={[styles.TextStyle, styles.TextApply]}>
              {'PAY $10,175 >'}
            </Text>
          </Pressable>
          <Pressable
            style={[styles.Button, styles.ButtonReadyApply]}
            onPress={handleSaveAndExit}>
            <Text style={[styles.TextStyle, styles.TextReadyApply]}>
              {'SAVE & EXIT'}
            </Text>
          </Pressable>
          <Pressable
            style={[styles.Button, styles.ButtonCancel]}
            onPress={handleCancel}>
            <Text style={[styles.TextStyle, styles.TextCancel]}>Cancel</Text>
          </Pressable>
        </View>
      </View>
      <SelectPaymentMethodModal
        modalVisible={showSelectPaymentMethodModal}
        setModalVisible={setShowSelectPaymentMethodModal}
      />
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'column',
  },
  ContentView: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  Button: {
    borderRadius: 10,
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
  TextCancel: {
    color: COLOR_BUTTON_DEFAULT,
  },
  TextApply: {
    color: COLOR_WHITE,
  },
  TextReadyApply: {
    color: COLOR_PINK,
  },
  PayResultView: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderColor: COLOR_FONT_DEFAULT,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'column',
  },
  PayRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  PayItemFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
  },
  PayTotalTextFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    color: COLOR_SKY,
    lineHeight: 34,
  },
  SplitPaymentView: {
    height: 56,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 12,
  },
  SplitPaymentTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
  },
  ActionView: {
    position: 'absolute',
    bottom: 10,
    width: width - 48,
    marginLeft: 24,
  },
});

export default PayScreen;
