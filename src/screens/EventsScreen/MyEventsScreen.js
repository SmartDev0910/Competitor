import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import {
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_BOLD} from '../../constants/fonts';
import RegisteredView from './RegisteredView';
import WaitingView from './WaitingView';
import DraftsView from './DraftsView';
import SavedView from './SavedView';
import TicketsView from './TicketsView';

function MyEventsScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'registered', title: 'Registered'},
    {key: 'waiting', title: 'Waiting'},
    {key: 'drafts', title: 'Drafts'},
    {key: 'saved', title: 'Saved'},
    {key: 'tickets', title: 'Tickets'},
  ]);

  const RegisteredTab = () => <RegisteredView navigation={navigation} />;

  const WaitingTab = () => <WaitingView navigation={navigation} />;

  const DraftsTab = () => <DraftsView navigation={navigation} />;

  const SavedTab = () => <SavedView navigation={navigation} />;

  const TicketsTab = () => <TicketsView navigation={navigation} />;

  const renderScene = SceneMap({
    registered: RegisteredTab,
    waiting: WaitingTab,
    drafts: DraftsTab,
    saved: SavedTab,
    tickets: TicketsTab,
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
      <Text style={styles.TitleFont}>My Events</Text>
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

  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 20,
    color: COLOR_FONT_DEFAULT,
    marginVertical: 10,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
});

export default MyEventsScreen;
