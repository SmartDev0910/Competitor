import React from 'react';
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
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import HorsesHelpModal from '../../../components/events/HorsesHelpModal';
import HorseTicketsData from '../../../constants/events/horseTickets';
import HorseItem from '../../../components/events/HorseItem';
import SelectHorseModal from '../../../components/events/SelectHorseModal';

const HorsesScreen = ({navigation}) => {
  const [showHelpModal, setShowHelpModal] = React.useState(false);
  const [showSelectHorseModal, setShowSelectHorseModal] = React.useState(false);

  const handleNext = () => {
    navigation.navigate('RegisterFeesScreen');
  };

  const handleSaveAndExit = () => {};

  const handleCancel = () => {};

  const handleHelpModal = () => {
    setShowHelpModal(true);
  };

  const handleSelectHorseModal = () => {
    setShowSelectHorseModal(true);
  };

  return (
    <View style={styles.Wrapper}>
      <Appbar
        title="Horses"
        navigation={navigation}
        visibleHelp={true}
        onInfoPress={handleHelpModal}
      />
      <ScrollView>
        <View style={styles.ContentView}>
          {HorseTicketsData.map((item, index) => {
            return (
              <HorseItem
                key={index}
                title={item.title}
                riders={item.riders}
                horses={item.horses}
                members={item.members}
                onAddHorsePress={handleSelectHorseModal}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.ActionButtonView}>
        <Pressable style={[styles.Button, styles.ButtonCancel]}>
          <Text style={[styles.TextStyle, styles.TextCancel]}>Save & Exit</Text>
        </Pressable>
        <Pressable
          style={[styles.Button, styles.ButtonApply]}
          onPress={handleNext}>
          <Text style={[styles.TextStyle, styles.TextApply]}>{'Next >'}</Text>
        </Pressable>
      </View>
      <HorsesHelpModal
        modalVisible={showHelpModal}
        setModalVisible={setShowHelpModal}
      />
      <SelectHorseModal
        modalVisible={showSelectHorseModal}
        setModalVisible={setShowSelectHorseModal}
      />
    </View>
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

export default HorsesScreen;
