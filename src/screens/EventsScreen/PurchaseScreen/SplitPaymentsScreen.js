import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Appbar from './Appbar';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import PurchaseSplitPaymentsTicketsPane from '../../../components/events/PurchaseSplitPaymentsTicketsPane';
import PurchaseSplitPaymentsSummaryPane from '../../../components/events/PurchaseSplitPaymentsSummaryPane';
import PurchasePaySplitPaymentsModal from '../../../components/events/PurchasePaySplitPaymentsModal';

const SplitPaymentsScreen = ({navigation}) => {
  const [showPaySplitPaymentsModal, setShowPaySplitPaymentsModal] =
    useState(false);
  const [ticketsCollapsed, setTicketsCollapsed] = useState(true);
  const [summaryCollapsed, setSummaryCollapsed] = useState(true);

  const handleTicketsCollapse = () => {
    setTicketsCollapsed(!ticketsCollapsed);
  };

  const handleSummaryCollapse = () => {
    setSummaryCollapsed(!summaryCollapsed);
  };

  const handlePay = () => {
    setShowPaySplitPaymentsModal(true);
  };

  const handleSaveAndExit = () => {};

  const handleCancel = () => {};

  return (
    <>
      <View style={styles.Wrapper}>
        <Appbar title="Pay" navigation={navigation} />
        <ScrollView>
          <View style={styles.ContentView}>
            <PurchaseSplitPaymentsTicketsPane
              collapsed={ticketsCollapsed}
              onCollapse={handleTicketsCollapse}
            />
            <PurchaseSplitPaymentsSummaryPane
              collapsed={summaryCollapsed}
              onCollapse={handleSummaryCollapse}
            />
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
            onPress={handlePay}>
            <Text style={[styles.TextStyle, styles.TextApply]}>{'Pay'}</Text>
          </Pressable>
        </View>
      </View>
      <PurchasePaySplitPaymentsModal
        modalVisible={showPaySplitPaymentsModal}
        setModalVisible={setShowPaySplitPaymentsModal}
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

export default SplitPaymentsScreen;
