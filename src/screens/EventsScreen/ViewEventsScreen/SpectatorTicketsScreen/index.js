import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../../../constants/fonts';
import ImageButton from '../../../../components/home/ImageButton';
import {ArrowLeftIcon} from '../../../../constants/icons';
import StallItem from '../../../../components/events/StallItem';
import SpectatorTicketsData from '../../../../constants/events/spectatorTickets';

function SpectatorTicketsScreen({navigation}) {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.Appbar}>
          <ImageButton
            source={ArrowLeftIcon}
            onPress={() => navigation.goBack()}
            style={styles.BackButton}
          />
          <Text style={styles.AppbarTitle}>Spectator tickets</Text>
        </View>
        {SpectatorTicketsData.map((item, index) => {
          return (
            <StallItem
              key={index}
              title={item.title}
              status={item.status}
              content={item.content}
            />
          );
        })}
        <Pressable style={[styles.Button, styles.ButtonApply]}>
          <Text style={[styles.TextStyle, styles.TextApply]}>
            Purchase Tickets
          </Text>
        </Pressable>
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
  Button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
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
});

export default SpectatorTicketsScreen;
