import React from 'react';
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
            <Pressable
              style={[styles.Button, styles.ButtonApply]}
              onPress={handleNext}>
              <Text style={[styles.TextStyle, styles.TextApply]}>
                {'Next >'}
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
        </ScrollView>
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

export default FeesScreen;
