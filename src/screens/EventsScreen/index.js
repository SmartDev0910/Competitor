import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import Appbar from '../../components/events/Appbar';
import ProfilePane from '../../components/events/ProfilePane';
import {
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {TammyWilliamsImage} from '../../constants/images';
import AuthorityView from './AuthorityView';
import EligibilityView from './EligibilityView';
import EventsView from './EventsView';
import PastEventsView from './PastEventsView';

function EventsScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'events', title: 'Events'},
    {key: 'past', title: 'Past'},
    {key: 'eligibility', title: 'Eligibility'},
    {key: 'authority', title: 'Authority'},
  ]);

  const EventsTab = () => <EventsView />;

  const PastTab = () => <PastEventsView />;

  const EligibilityTab = () => <EligibilityView />;

  const AuthorityTab = () => <AuthorityView />;

  const renderScene = SceneMap({
    events: EventsTab,
    past: PastTab,
    eligibility: EligibilityTab,
    authority: AuthorityTab,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: COLOR_PINK}}
      style={{backgroundColor: COLOR_WHITE}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? COLOR_PINK : COLOR_FONT_DEFAULT,
            fontSize: 14,
            fontFamily: FONT_REGULAR,
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={styles.Wrapper}>
      <Appbar navigation={navigation} />
      <ProfilePane
        image={TammyWilliamsImage}
        fullName="Tammy Williams"
        statusText="Mr Tobins • Trainer • Unauthorized"
      />
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
});

export default EventsScreen;
