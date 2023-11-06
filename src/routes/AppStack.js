import React from 'react';
import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  EventsScreen,
  NotificationScreen,
  MessageScreen,
  SearchScreen,
  FollowingScreen,
  OrganizerProfileScreen,
  ViewEventScreen,
} from '../screens';
import {
  HomeWeakIcon,
  HomeSelectedIcon,
  TodayWeakIcon,
  TodaySelectedIcon,
  DoorbellWeakIcon,
  DoorbellSelectedIcon,
  MessagingWeakIcon,
  MessagingSelectedIcon,
} from '../constants/icons';
import {UserAvatarImage} from '../constants/images';
import {COLOR_PINK, COLOR_WHITE} from '../constants/colors';
import Divider from '../components/home/Divider';

const Tab = createBottomTabNavigator();

// Stack Navigator for each of the screens
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}
const NotificationStack = createStackNavigator();

function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
    </NotificationStack.Navigator>
  );
}

const MessageStack = createStackNavigator();

function MessageStackScreen() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          headerShown: false,
        }}
      />
    </MessageStack.Navigator>
  );
}
const EventsStack = createStackNavigator();

function EventsStackScreen() {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          headerShown: false,
        }}
      />
      <EventsStack.Screen
        name="ViewEventScreen"
        component={ViewEventScreen}
        options={{
          headerShown: false,
        }}
      />
    </EventsStack.Navigator>
  );
}

const FollowingStack = createStackNavigator();

function FollowingStackScreen() {
  return (
    <FollowingStack.Navigator>
      <FollowingStack.Screen
        name="FollowingScreen"
        component={FollowingScreen}
        options={{
          headerShown: false,
        }}
      />
      <FollowingStack.Screen
        name="OrganizerProfileScreen"
        component={OrganizerProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </FollowingStack.Navigator>
  );
}

export default AppStack = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 58,
            elevation: 0,
          },
          tabBarItemStyle: {
            marginTop: 27,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View style={styles.TabBarIcon}>
                  <Image
                    source={focused ? HomeSelectedIcon : HomeWeakIcon}
                    style={styles.bottombaricon}
                  />
                  {focused ? <Divider style={styles.Divider} /> : ''}
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsStackScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View style={styles.TabBarIcon}>
                  <Image
                    source={focused ? TodaySelectedIcon : TodayWeakIcon}
                    style={styles.bottombaricon}
                  />
                  {focused ? <Divider style={styles.Divider} /> : ''}
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationStackScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View style={styles.TabBarIcon}>
                  <Image
                    source={focused ? DoorbellSelectedIcon : DoorbellWeakIcon}
                    style={styles.bottombaricon}
                  />
                  {focused ? <Divider style={styles.Divider} /> : ''}
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessageStackScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View style={styles.TabBarIcon}>
                  <Image
                    source={focused ? MessagingSelectedIcon : MessagingWeakIcon}
                    style={styles.bottombaricon}
                  />
                  {focused ? <Divider style={styles.Divider} /> : ''}
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Following"
          component={FollowingStackScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View style={styles.TabBarIcon}>
                  <Image
                    source={UserAvatarImage}
                    style={
                      focused ? styles.UserAvatarImage : styles.bottombaricon
                    }
                  />
                  {focused ? <Divider style={styles.Divider} /> : ''}
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: 48,
    backgroundColor: COLOR_WHITE,
  },
  bottombaricon: {
    width: 30,
    height: 30,
  },
  Divider: {
    height: 2,
    backgroundColor: COLOR_PINK,
    width: 18,
    marginTop: 4,
  },
  TabBarIcon: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  UserAvatarImage: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: COLOR_PINK,
    borderRadius: 45,
  },
});
