import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {FONT_REGULAR} from '../../../../constants/fonts';
import {
  ArrowLeftIcon,
  LaurelWreathIcon,
  PasteWeakIcon,
} from '../../../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_FONT_COMMENT,
} from '../../../../constants/colors';
import IconLabeledText from '../../../../components/following/IconLabeledText';
import {UsefLogo2Image} from '../../../../constants/images';
import TouchableIconTextItem from '../../../../components/following/TouchableIconTextItem';
import GovermentRecordsModal from '../../../../components/following/GovermentRecordsModal';

const FEINumberScreen = ({navigation}) => {
  const [feiNumber, setFeiNumber] = useState('');
  const [showGovermentRecordsModal, setShowGovermentRecordsModal] =
    useState(false);

  const handleGovermentRecordsModal = () => {
    setShowGovermentRecordsModal(true);
  };

  return (
    <>
      <ScrollView style={styles.Wrapper}>
        <View>
          <View style={styles.Appbar}>
            <View style={styles.TitleView}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
              </TouchableOpacity>
              <Text style={styles.AppbarTextFont}>Horses FEI number</Text>
            </View>
            <TouchableOpacity
              style={styles.RightIconView}
              onPress={handleGovermentRecordsModal}>
              <Image source={LaurelWreathIcon} style={styles.RightIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.ContentView}>
            <IconLabeledText
              icon={UsefLogo2Image}
              placeholder={'Enter FEI number...'}
              rightIconVisible={false}
              value={feiNumber}
              onChangeText={text => setFeiNumber(text)}
            />
            <TouchableIconTextItem
              icon={PasteWeakIcon}
              text={'FEI status...'}
              downIconVisible={true}
              style={styles.TouchableIconTextItem}
            />
          </View>
        </View>
      </ScrollView>
      <GovermentRecordsModal
        modalVisible={showGovermentRecordsModal}
        setModalVisible={setShowGovermentRecordsModal}
        value={'987654, Active'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  Appbar: {
    height: 36,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AppbarButton: {
    width: 22,
    height: 22,
  },
  AppbarTextFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_DEFAULT,
    fontSize: 24,
    marginLeft: 7,
  },
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  RightIconView: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: COLOR_FONT_DEFAULT,
    borderWidth: 1,
  },
  RightIcon: {
    width: 14,
    height: 14,
  },
  ContentView: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    flexDirection: 'column',
  },
  TouchableIconTextItem: {
    color: COLOR_FONT_COMMENT,
  },
});

export default FEINumberScreen;
