import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
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
import CollapseModal from '../../../components/events/CollapseModal';
import ConfirmationRegistrationsPane from '../../../components/events/ConfirmationRegistrationsPane';
import ConfirmationFeesPane from '../../../components/events/ConfirmationFeesPane';
import ConfirmationTicketsPane from '../../../components/events/ConfirmationTicketsPane';
import ConfirmationPaperworkPane from '../../../components/events/ConfirmationPaperworkPane';
import ConfirmationGrandTotalPane from '../../../components/events/ConfirmationGrandTotalPane';

const ConfirmationScreen = ({navigation}) => {
  const [showCollapseModal, setShowCollapseModal] = React.useState(false);
  const [registerationCollapsed, setRegisterationCollapsed] =
    React.useState(false);
  const [feesCollapsed, setFeesCollapsed] = React.useState(false);
  const [ticketsCollapsed, setTicketsCollapsed] = React.useState(false);
  const [paperworkCollapsed, setPaperworkCollapsed] = React.useState(false);
  const [grandTotalCollapsed, setGrandTotalCollapsed] = React.useState(false);

  const handleRegisterationCollapse = () => {
    setRegisterationCollapsed(!registerationCollapsed);
  };

  const handleFeesCollapse = () => {
    setFeesCollapsed(!feesCollapsed);
  };

  const handleTicketsCollapse = () => {
    setTicketsCollapsed(!ticketsCollapsed);
  };

  const handlePaperworkCollapse = () => {
    setPaperworkCollapsed(!paperworkCollapsed);
  };

  const handleGrandTotalCollapse = () => {
    setGrandTotalCollapsed(!grandTotalCollapsed);
  };

  const handleNext = () => {
    navigation.navigate('RegisterPayScreen');
  };

  const handleSaveAndExit = () => {};

  const handleCancel = () => {};

  const handleCollapseAll = () => {
    setShowCollapseModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <Appbar
          title="Confirmation"
          navigation={navigation}
          collapsable={true}
          onCollapse={handleCollapseAll}
        />
        <ScrollView>
          <View style={styles.ContentView}>
            <ConfirmationRegistrationsPane
              collapsed={registerationCollapsed}
              onCollapse={handleRegisterationCollapse}
            />
            <ConfirmationFeesPane
              collapsed={feesCollapsed}
              onCollapse={handleFeesCollapse}
            />
            <ConfirmationTicketsPane
              collapsed={ticketsCollapsed}
              onCollapse={handleTicketsCollapse}
            />
            <ConfirmationPaperworkPane
              collapsed={paperworkCollapsed}
              onCollapse={handlePaperworkCollapse}
            />
            <ConfirmationGrandTotalPane
              collapsed={grandTotalCollapsed}
              onCollapse={handleGrandTotalCollapse}
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
            onPress={handleNext}>
            <Text style={[styles.TextStyle, styles.TextApply]}>{'Pay >'}</Text>
          </Pressable>
        </View>
      </View>
      <CollapseModal
        modalVisible={showCollapseModal}
        setModalVisible={setShowCollapseModal}
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

export default ConfirmationScreen;
