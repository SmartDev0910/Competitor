import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import {
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';
import NoFollowingView from './NoFollowingView';
import FollowerView from './FollowerView';
import OrganizersView from './OrganizersView';

function FollowingScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [routes] = useState([
    {key: 'team', title: 'Team'},
    {key: 'organizers', title: 'Organizers'},
  ]);

  const TeamTab = () =>
    loading ? <NoFollowingView /> : <FollowerView navigation={navigation} />;

  const OrganizersTab = () => <OrganizersView navigation={navigation} />;

  const renderScene = SceneMap({
    team: TeamTab,
    organizers: OrganizersTab,
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.Wrapper}>
      <Text style={styles.FollowingFont}>Following</Text>
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
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
    flex: 1,
  },
  FollowingFont: {
    fontFamily: FONT_BOLD,
    fontSize: 20,
    color: COLOR_FONT_DEFAULT,
    marginVertical: 10,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  TabViewWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default FollowingScreen;
