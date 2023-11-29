import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import {FONT_REGULAR} from '../../constants/fonts';
import {
  ArrowLeftIcon,
  DocumentsIcon,
  NameTagIcon,
  TearOffCalendarIcon,
} from '../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
} from '../../constants/colors';
import ImageLabeledItem from '../../components/paperwork/ImageLabeledItem';
import IconLabeledItem from '../../components/paperwork/IconLabeledItem';
import {EventLogo1Image, JaredTulsa1Image} from '../../constants/images';
import ShareDocumentModal from '../../components/paperwork/ShareDocumentModal';

const PaidScreen = ({navigation}) => {
  const [showShareDocumentModal, setShowShareDocumentModal] =
    React.useState(false);
  const handleShare = () => {
    setShowShareDocumentModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.Appbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
          </TouchableOpacity>
          <Text style={styles.AppbarTextFont}>Signed</Text>
        </View>
        <ScrollView>
          <View style={styles.ContentView}>
            <ImageLabeledItem
              title={'Sebastian Jarvis'}
              image={JaredTulsa1Image}
            />
            <ImageLabeledItem
              title={'Winter Springs Horse Care Clinic'}
              image={EventLogo1Image}
            />
            <IconLabeledItem
              title="General Liability Waiver"
              image={DocumentsIcon}
            />
            <IconLabeledItem title="Trainer" image={NameTagIcon} />
            <IconLabeledItem title="Dec 28, 2023" image={TearOffCalendarIcon} />
          </View>
        </ScrollView>

        <View style={styles.BottomButton}>
          <Pressable style={[styles.Button, styles.ButtonApply]}>
            <Text style={[styles.TextStyle, styles.TextApply]}>download</Text>
          </Pressable>
          <Pressable
            style={[styles.Button, styles.ButtonCancel]}
            onPress={handleShare}>
            <Text style={[styles.TextStyle, styles.TextCancel]}>Share</Text>
          </Pressable>
        </View>
      </View>

      <ShareDocumentModal
        modalVisible={showShareDocumentModal}
        setModalVisible={setShowShareDocumentModal}
      />
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  Appbar: {
    height: 36,
    paddingHorizontal: 24,
    flexDirection: 'row',
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
  ContentView: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    flexDirection: 'column',
    marginBottom: 60,
  },
  Button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextApply: {
    color: COLOR_WHITE,
  },
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 10,
    width: width - 48,
  },
  ButtonCancel: {
    backgroundColor: COLOR_WHITE,
    borderWidth: 1,
    borderColor: COLOR_PINK,
    borderRadius: 12,
  },
  TextCancel: {
    color: COLOR_PINK,
  },
});

export default PaidScreen;
