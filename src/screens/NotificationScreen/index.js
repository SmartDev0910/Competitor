import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import {
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_BOLD} from '../../constants/fonts';
import NotificationView from './NotificationView';
import SettingsView from './SettingsView';

function NotificationScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'all', title: 'All'},
    {key: 'unread', title: 'Unread'},
    {key: 'read', title: 'Read'},
    {key: 'settings', title: 'Settings'},
  ]);

  const AllTab = () => <NotificationView navigation={navigation} />;

  const UnreadTab = () => <NotificationView navigation={navigation} />;

  const ReadTab = () => <NotificationView navigation={navigation} />;

  const SettingsTab = () => <SettingsView navigation={navigation} />;

  const renderScene = SceneMap({
    all: AllTab,
    unread: UnreadTab,
    read: ReadTab,
    settings: SettingsTab,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: COLOR_PINK}}
      style={{backgroundColor: COLOR_WHITE}}
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
      <Text style={styles.TitleFont}>Notifications</Text>
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

export default NotificationScreen;
