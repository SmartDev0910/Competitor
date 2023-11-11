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
    React.useState(true);
  const [feesCollapsed, setFeesCollapsed] = React.useState(true);
  const [ticketsCollapsed, setTicketsCollapsed] = React.useState(true);
  const [paperworkCollapsed, setPaperworkCollapsed] = React.useState(true);
  const [grandTotalCollapsed, setGrandTotalCollapsed] = React.useState(true);

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
        <View style={styles.ActionView}>
          <Pressable
            style={[styles.Button, styles.ButtonApply]}
            onPress={handleNext}>
            <Text style={[styles.TextStyle, styles.TextApply]}>{'Pay >'}</Text>
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
  ActionView: {
    position: 'absolute',
    bottom: 10,
    width: width - 48,
    marginLeft: 24,
  },
});

export default ConfirmationScreen;
