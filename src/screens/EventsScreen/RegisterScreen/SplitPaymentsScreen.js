import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import Appbar from './Appbar';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
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
            <Pressable
              style={[styles.Button, styles.ButtonApply]}
              onPress={handlePay}>
              <Text style={[styles.TextStyle, styles.TextApply]}>{'Pay'}</Text>
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
        </ScrollView>
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
});

export default SplitPaymentsScreen;
