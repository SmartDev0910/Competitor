import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Appbar from './Appbar';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import AssignBillsToModal from '../../../components/events/AssignBillsToModal';
import SplitPaymentsRegistrationsPane from '../../../components/events/SplitPaymentsRegistrationsPane';
import SplitPaymentsFeesPane from '../../../components/events/SplitPaymentsFeesPane';
import SplitPaymentsTicketsPane from '../../../components/events/SplitPaymentsTicketsPane';
import SplitPaymentsSummaryPane from '../../../components/events/SplitPaymentsSummaryPane';
import PaySplitPaymentsModal from '../../../components/events/PaySplitPaymentsModal';

const SplitPaymentsScreen = ({navigation}) => {
  const [showAssignBillsToModal, setShowAssignBillsToModal] = useState(false);
  const [showPaySplitPaymentsModal, setShowPaySplitPaymentsModal] =
    useState(false);
  const [registerationCollapsed, setRegisterationCollapsed] = useState(false);
  const [feesCollapsed, setFeesCollapsed] = useState(false);
  const [ticketsCollapsed, setTicketsCollapsed] = useState(false);
  const [summaryCollapsed, setSummaryCollapsed] = useState(false);

  const handleRegisterationCollapse = () => {
    setRegisterationCollapsed(!registerationCollapsed);
  };

  const handleFeesCollapse = () => {
    setFeesCollapsed(!feesCollapsed);
  };

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

  const handleCollapseAll = () => {
    setShowAssignBillsToModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <Appbar
          title="Split Payments"
          navigation={navigation}
          collapsable={true}
          onCollapse={handleCollapseAll}
        />
        <ScrollView>
          <View style={styles.ContentView}>
            <SplitPaymentsRegistrationsPane
              collapsed={registerationCollapsed}
              onCollapse={handleRegisterationCollapse}
            />
            <SplitPaymentsFeesPane
              collapsed={feesCollapsed}
              onCollapse={handleFeesCollapse}
            />
            <SplitPaymentsTicketsPane
              collapsed={ticketsCollapsed}
              onCollapse={handleTicketsCollapse}
            />
            <SplitPaymentsSummaryPane
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
      <AssignBillsToModal
        modalVisible={showAssignBillsToModal}
        setModalVisible={setShowAssignBillsToModal}
      />
      <PaySplitPaymentsModal
        modalVisible={showPaySplitPaymentsModal}
        setModalVisible={setShowPaySplitPaymentsModal}
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
