import React from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MessageScreen,
  NotificationScreen,
  ProfileScreen,
  FollowingScreen,
} from '../screens';
import {HomeSelectedIcon, HomeIcon} from '../constants';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

// Stack Navigator for each of the screens
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}
const FollwingStack = createStackNavigator();

function FollowingStackScreen() {
  return (
    <FollwingStack.Navigator>
      <FollwingStack.Screen
        name="FollowingScreen"
        component={FollowingScreen}
        options={{
          headerShown: false,
        }}
      />
    </FollwingStack.Navigator>
  );
}

const MessageStack = createStackNavigator();

function MessageStackcreen() {
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
const NotificationsStack = createStackNavigator();

function NotificationsStackScreen() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
    </NotificationsStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
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
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={focused ? HomeIcon : HomeSelectedIcon}
                  style={styles.bottombaricon}
                />
              );
            },
          }}
        />
        <Tab.Screen name="Notifications" component={NotificationsStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        <Tab.Screen name="Messagen" component={MessageStackcreen} />
        <Tab.Screen name="Following" component={FollowingStackScreen} />
      </Tab.Navigator>
      {/* <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#281034',
  },
  bottombaricon: {
    width: 30,
    height: 30,
  },
});
