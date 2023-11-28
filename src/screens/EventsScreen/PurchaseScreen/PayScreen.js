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
  COLOR_FONT_COMMENT,
} from '../../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../../constants/fonts';
import PurchaseSelectPaymentMethodModal from '../../../components/events/PurchaseSelectPaymentMethodModal';
import {ArrowRightIcon} from '../../../constants/icons';

const PayScreen = ({navigation}) => {
  const [showSelectPaymentMethodModal, setShowSelectPaymentMethodModal] =
    React.useState(false);

  const handleSelectPaymentMethodModal = () => {
    setShowSelectPaymentMethodModal(true);
  };

  const handleSplitPayments = () => {
    navigation.navigate('PurchaseSplitPaymentsScreen');
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
                <Text style={styles.PayItemFont}>Tickets</Text>
                <Text style={styles.PayItemFont}>$320</Text>
              </View>
              <View style={styles.PayRowView}>
                <Text style={styles.PayItemFont}>Taxes</Text>
                <Text style={styles.PayItemFont}>$16</Text>
              </View>
              <View style={styles.PayRowView}>
                <Text style={styles.PayTotalTextFont}>Total</Text>
                <Text style={styles.PayTotalTextFont}>$336</Text>
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
        <View style={styles.ActionButtonView}>
          <Pressable style={[styles.Button, styles.ButtonCancel]}>
            <Text style={[styles.TextStyle, styles.TextCancel]}>
              Save & Exit
            </Text>
          </Pressable>
          <Pressable
            style={[styles.Button, styles.ButtonApply]}
            onPress={handleSelectPaymentMethodModal}>
            <Text style={[styles.TextStyle, styles.TextApply]}>
              {'pay $336 >'}
            </Text>
          </Pressable>
        </View>
      </View>
      <PurchaseSelectPaymentMethodModal
        modalVisible={showSelectPaymentMethodModal}
        setModalVisible={setShowSelectPaymentMethodModal}
        navigation={navigation}
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
    paddingTop: 18,
    paddingBottom: 90,
  },
  Button: {
    borderRadius: 10,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 60) / 2,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
  },
  ButtonReadyApply: {
    borderWidth: 1,
    borderColor: COLOR_PINK,
  },
  ButtonCancel: {
    backgroundColor: COLOR_WHITE,
    color: COLOR_FONT_COMMENT,
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
  ActionButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: COLOR_EVENT_BORDER,
    width: width - 48,
    marginLeft: 24,
    paddingVertical: 12,
    backgroundColor: COLOR_WHITE,
  },
});

export default PayScreen;
