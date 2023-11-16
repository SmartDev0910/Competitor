import {View, Text, StyleSheet} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../../../constants/fonts';
import ImageButton from '../../../../components/home/ImageButton';
import {ArrowLeftIcon} from '../../../../constants/icons';

function DirectionsScreen({navigation}) {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <ImageButton
          source={ArrowLeftIcon}
          onPress={() => navigation.goBack()}
          style={styles.BackButton}
        />
        <Text style={styles.AppbarTitle}>Directions</Text>
      </View>
      <Text style={styles.DescTextFont}>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alickajdk aahanana.`}
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

export default DirectionsScreen;
