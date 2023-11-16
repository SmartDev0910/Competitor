import {View, Text, StyleSheet} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../../../constants/fonts';
import ImageButton from '../../../../components/home/ImageButton';
import {ArrowLeftIcon} from '../../../../constants/icons';

function AboutScreen({navigation}) {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <ImageButton
          source={ArrowLeftIcon}
          onPress={() => navigation.goBack()}
          style={styles.BackButton}
        />
        <Text style={styles.AppbarTitle}>About</Text>
      </View>
      <Text style={styles.DescTextFont}>
        {`Come celebrate our 25th anniversary at HITS Commonwealth Park! This year, HITS Culpeper will feature six weeks of USEF competition in the heart of Virginia’s Horse Country. Just one hour from Washington, D.C., HITS Commonwealth Park boasts a 100+ acre homestead with whit grass.

Just one hour from Washington, D.C., HITS Commonwealth Park boasts a 100+ acre homestead with whit grass.`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    paddingHorizontal: 24,
  },
  BackButton: {
    width: 22,
    height: 22,
  },
  AppbarTitle: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 20,
    color: COLOR_FONT_DEFAULT,
    marginLeft: 10,
  },
  Appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    shadowColor: COLOR_BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  DescTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    marginTop: 20,
  },
});

export default AboutScreen;
