import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../../../constants/fonts';
import ImageButton from '../../../../components/home/ImageButton';
import {ArrowLeftIcon} from '../../../../constants/icons';
import PoliciesData from '../../../../constants/events/policies';
import PolicyBorderedItem from '../../../../components/events/PolicyBorderedItem';

function PoliciesScreen({navigation}) {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.Appbar}>
          <ImageButton
            source={ArrowLeftIcon}
            onPress={() => navigation.goBack()}
            style={styles.BackButton}
          />
          <Text style={styles.AppbarTitle}>Policies</Text>
        </View>
        {PoliciesData.map((item, index) => {
          return (
            <PolicyBorderedItem
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </View>
    </ScrollView>
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
    shadowColor: COLOR_BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  DescTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    marginTop: 20,
  },
});

export default PoliciesScreen;
