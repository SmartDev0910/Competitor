import React, {useContext} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import TouchableIconTextItem from '../../../components/following/TouchableIconTextItem';
import {
  CertificateWeakIcon,
  DoctorsBagWeakIcon,
  InsulinPenWeakIcon,
  LengthWeakIcon,
} from '../../../constants/icons';
import {ModalContext} from '../../../providers/ModalProvider';

const DocumentsView = ({navigation}) => {
  const [, , , , , , , , competitionNumberData, setCompetitionNumberData] =
    useContext(ModalContext);

  return (
    <>
      <ScrollView>
        <View style={styles.Wrapper}>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>documents</Text>
            <TouchableIconTextItem
              icon={LengthWeakIcon}
              text={'Measurement card'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
            />
            <TouchableIconTextItem
              icon={CertificateWeakIcon}
              text={'Coggins'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
            />
            <TouchableIconTextItem
              icon={DoctorsBagWeakIcon}
              text={'Health records'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
            />
          </View>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>VACCINATIONS</Text>
            <TouchableIconTextItem
              icon={InsulinPenWeakIcon}
              text={'Vaccinations records'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
            />
            <TouchableIconTextItem
              icon={InsulinPenWeakIcon}
              text={'Rhinopneumonitis status'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
            />
            <TouchableIconTextItem
              icon={InsulinPenWeakIcon}
              text={'Influenza current status'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 34,
    letterSpacing: 0.16,
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 10,
  },
  PartView: {
    flexDirection: 'column',
  },
  TouchableIconTextItem: {
    color: COLOR_FONT_COMMENT,
  },
});

export default DocumentsView;
