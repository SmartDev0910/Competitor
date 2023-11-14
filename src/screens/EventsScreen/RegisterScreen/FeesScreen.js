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
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import CollapseModal from '../../../components/events/CollapseModal';
import FeesData from '../../../constants/events/feesData';
import FeesPane from '../../../components/events/FeesPane';
import GovermanceFeesPane from '../../../components/events/GovermanceFeesPane';
import GovermanceFeesInfoModal from '../../../components/events/GovermanceFeesInfoModal';

const FeesScreen = ({navigation}) => {
  const [showCollapseModal, setShowCollapseModal] = React.useState(false);
  const [showGovermanceFeesInfoModal, setShowGovermanceFeesInfoModal] =
    React.useState(false);

  const handleNext = () => {
    navigation.navigate('RegisterTicketsScreen');
  };

  const handleSaveAndExit = () => {};

  const handleCancel = () => {};

  const handleCollapseAll = () => {
    setShowCollapseModal(true);
  };

  const handleGovermanceInfoMore = () => {
    setShowGovermanceFeesInfoModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <Appbar
          title="Fees"
          navigation={navigation}
          collapsable={true}
          onCollapse={handleCollapseAll}
        />
        <ScrollView>
          <View style={styles.ContentView}>
            {FeesData.map((item, index) => {
              return (
                <FeesPane key={index} title={item.title} fees={item.fees} />
              );
            })}
            <GovermanceFeesPane
              title="Governance fees"
              usefFee="8"
              usefDrugFee="7"
              ushjaHorseFee="15"
              info="Governance fee details...More >"
              onMorePress={handleGovermanceInfoMore}
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
            style={[styles.Button, styles.ButtonReadyApply]}
            onPress={handleNext}>
            <Text style={[styles.TextStyle, styles.TextReadyApply]}>
              {'Next >'}
            </Text>
          </Pressable>
        </View>
      </View>
      <CollapseModal
        modalVisible={showCollapseModal}
        setModalVisible={setShowCollapseModal}
      />
      <GovermanceFeesInfoModal
        modalVisible={showGovermanceFeesInfoModal}
        setModalVisible={setShowGovermanceFeesInfoModal}
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

export default FeesScreen;
