import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import {
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../../../constants/fonts';
import ImageButton from '../../../../components/home/ImageButton';
import {ArrowLeftIcon} from '../../../../constants/icons';
import DayView from './DayView';

function ScheduleScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'thursday', title: 'Thursday'},
    {key: 'friday', title: 'Friday'},
    {key: 'saturday', title: 'Saturday'},
    {key: 'sunday', title: 'Sunday'},
  ]);

  const ThursdayTab = () => <DayView navigation={navigation} />;
  const FridayTab = () => <DayView navigation={navigation} />;
  const SaturdayTab = () => <DayView navigation={navigation} />;
  const SundayTab = () => <DayView navigation={navigation} />;

  const renderScene = SceneMap({
    thursday: ThursdayTab,
    friday: FridayTab,
    saturday: SaturdayTab,
    sunday: SundayTab,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: COLOR_PINK}}
      style={{backgroundColor: COLOR_WHITE}}
      scrollEnabled
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: focused ? COLOR_PINK : COLOR_FONT_DEFAULT,
              fontSize: 14,
              fontFamily: FONT_REGULAR,
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <ImageButton
          source={ArrowLeftIcon}
          onPress={() => navigation.goBack()}
          style={styles.BackButton}
        />
        <Text style={styles.AppbarTitle}>Schedule</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    paddingBottom: 20,
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
    flex: 1,
  },
  TabViewWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
    paddingHorizontal: 24,
    paddingTop: 20,
  },
});

export default ScheduleScreen;
