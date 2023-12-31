import React from 'react';
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  EventsScreen,
  NotificationScreen,
  MessageScreen,
  SearchScreen,
  FollowingScreen,
  OrganizerProfileScreen,
  ViewEventScreen,
  EditProfileScreen,
  NavScreen,
  MyEventsScreen,
  TicketsScreen,
  RegisterTeamScreen,
  RegisterConfirmationScreen,
  RegisterFeesScreen,
  RegisterHorsesScreen,
  RegisterPaperworkScreen,
  RegisterPayScreen,
  RegisterRidersScreen,
  RegisterSignScreen,
  RegisterSplitPaymentsScreen,
  RegisterTicketsScreen,
  ProfileScreen,
  AccountEmailScreen,
  ManagePasswordScreen,
  PrivacySettingScreen,
  AddCardScreen,
  StaffScreen,
  DirectionsScreen,
  FeesScreen,
  PoliciesScreen,
  SpectatorTicketsScreen,
  AboutScreen,
  ScheduleScreen,
  SponsorsScreen,
  FEINumberScreen,
  USEFNumberScreen,
  SafeSportScreen,
  BackgroundCheckScreen,
  EndorsementLetterScreen,
  CompetitionNumberScreen,
  SyncCompetitionNumberScreen,
  SyncEligibilityScreen,
  SyncSuspensionScreen,
  SingleEventScreen,
  HorseProfileScreen,
  SettingHorseProfileScreen,
  HorseUSEFNumberScreen,
  HorseFEINumberScreen,
  MeasurementCardScreen,
  CogginsScreen,
  HealthRecordsScreen,
  VaccinationRecordsScreen,
  PurchaseTicketsScreen,
  PurchaseConfirmationScreen,
  PurchasePayScreen,
  PurchaseSplitPaymentsScreen,
  MessageSearchScreen,
  MessageDetailScreen,
  PaperworkScreen,
  PaperworkSearchScreen,
  PaperworkSignScreen,
  PaperworkSignedScreen,
  HelpScreen,
  HelpFAQScreen,
  HelpTermsAndConditionsScreen,
  BillsScreen,
  BillsSearchScreen,
  BillsPaidScreen,
  BillsUnPaidScreen,
  BillsRefundedScreen,
  BillsRefundPendingScreen,
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
import { UserAvatarImage } from '../constants/images';
import { COLOR_PINK, COLOR_WHITE } from '../constants/colors';
import Divider from '../components/home/Divider';
import { ModalProvider } from '../providers/ModalProvider';

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
      <MessageStack.Screen
        name="MessageSearchScreen"
        component={MessageSearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <MessageStack.Screen
        name="MessageDetailScreen"
        component={MessageDetailScreen}
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
    <ModalProvider>
      <EventsStack.Navigator>
        <EventsStack.Screen
          name="EventsScreen"
          component={EventsScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="MyEventsScreen"
          component={MyEventsScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="SingleEventScreen"
          component={SingleEventScreen}
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
        <EventsStack.Screen
          name="StaffScreen"
          component={StaffScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="SponsorsScreen"
          component={SponsorsScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="ScheduleScreen"
          component={ScheduleScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="DirectionsScreen"
          component={DirectionsScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="FeesScreen"
          component={FeesScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="PoliciesScreen"
          component={PoliciesScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="SpectatorTicketsScreen"
          component={SpectatorTicketsScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="TicketsScreen"
          component={TicketsScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="RegisterTeamScreen"
          component={RegisterTeamScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="RegisterConfirmationScreen"
          component={RegisterConfirmationScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="RegisterFeesScreen"
          component={RegisterFeesScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="RegisterHorsesScreen"
          component={RegisterHorsesScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="RegisterPaperworkScreen"
          component={RegisterPaperworkScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="RegisterPayScreen"
          component={RegisterPayScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="RegisterRidersScreen"
          component={RegisterRidersScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="RegisterSignScreen"
          component={RegisterSignScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="RegisterSplitPaymentsScreen"
          component={RegisterSplitPaymentsScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="RegisterTicketsScreen"
          component={RegisterTicketsScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="PurchaseTicketsScreen"
          component={PurchaseTicketsScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="PurchaseConfirmationScreen"
          component={PurchaseConfirmationScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="PurchasePayScreen"
          component={PurchasePayScreen}
          options={{
            headerShown: false,
          }}
        />
        <EventsStack.Screen
          name="PurchaseSplitPaymentsScreen"
          component={PurchaseSplitPaymentsScreen}
          options={{
            headerShown: false,
          }}
        />
      </EventsStack.Navigator>
    </ModalProvider>
  );
}

const NavStack = createStackNavigator();

function NavStackScreen() {
  return (
    <ModalProvider>
      <NavStack.Navigator initialRouteName="NavScreen">
        <NavStack.Screen
          name="NavScreen"
          component={NavScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="FollowingScreen"
          component={FollowingScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="MyEventsScreen"
          component={MyEventsScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="SingleEventScreen"
          component={SingleEventScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="OrganizerProfileScreen"
          component={OrganizerProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="AccountEmailScreen"
          component={AccountEmailScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="ManagePasswordScreen"
          component={ManagePasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="PrivacySettingScreen"
          component={PrivacySettingScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="AddCardScreen"
          component={AddCardScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="USEFNumberScreen"
          component={USEFNumberScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="FEINumberScreen"
          component={FEINumberScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="SafeSportScreen"
          component={SafeSportScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="BackgroundCheckScreen"
          component={BackgroundCheckScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="EndorsementLetterScreen"
          component={EndorsementLetterScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="CompetitionNumberScreen"
          component={CompetitionNumberScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="SyncCompetitionNumberScreen"
          component={SyncCompetitionNumberScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="SyncEligibilityScreen"
          component={SyncEligibilityScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="SyncSuspensionScreen"
          component={SyncSuspensionScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="TicketsScreen"
          component={TicketsScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="HorseProfileScreen"
          component={HorseProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="SettingHorseProfileScreen"
          component={SettingHorseProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="HorseUSEFNumberScreen"
          component={HorseUSEFNumberScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="HorseFEINumberScreen"
          component={HorseFEINumberScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="MeasurementCardScreen"
          component={MeasurementCardScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="CogginsScreen"
          component={CogginsScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="HealthRecordsScreen"
          component={HealthRecordsScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="VaccinationRecordsScreen"
          component={VaccinationRecordsScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="ViewEventScreen"
          component={ViewEventScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="RegisterTeamScreen"
          component={RegisterTeamScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="RegisterConfirmationScreen"
          component={RegisterConfirmationScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="RegisterFeesScreen"
          component={RegisterFeesScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="RegisterHorsesScreen"
          component={RegisterHorsesScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="RegisterPaperworkScreen"
          component={RegisterPaperworkScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="RegisterPayScreen"
          component={RegisterPayScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="RegisterRidersScreen"
          component={RegisterRidersScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="RegisterSignScreen"
          component={RegisterSignScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="RegisterSplitPaymentsScreen"
          component={RegisterSplitPaymentsScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="RegisterTicketsScreen"
          component={RegisterTicketsScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="PaperworkScreen"
          component={PaperworkScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="PaperworkSearchScreen"
          component={PaperworkSearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="PaperworkSignScreen"
          component={PaperworkSignScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="PaperworkSignedScreen"
          component={PaperworkSignedScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="HelpScreen"
          component={HelpScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="HelpFAQScreen"
          component={HelpFAQScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="HelpTermsAndConditionsScreen"
          component={HelpTermsAndConditionsScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="BillsScreen"
          component={BillsScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="BillsSearchScreen"
          component={BillsSearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="BillsPaidScreen"
          component={BillsPaidScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="BillsUnPaidScreen"
          component={BillsUnPaidScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="BillsRefundedScreen"
          component={BillsRefundedScreen}
          options={{
            headerShown: false,
          }}
        />
        <NavStack.Screen
          name="BillsRefundPendingScreen"
          component={BillsRefundPendingScreen}
          options={{
            headerShown: false,
          }}
        />
      </NavStack.Navigator>
    </ModalProvider>
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
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
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
            tabBarIcon: ({ focused, color, size }) => {
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
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <View style={styles.TabBarIcon}>
                  <View style={styles.DotView} />
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
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <View style={styles.TabBarIcon}>
                  <View style={styles.DotView} />
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
          name="Nav"
          component={NavStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
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
  DotView: {
    width: 8,
    height: 8,
    backgroundColor: COLOR_PINK,
    position: 'absolute',
    right: -4,
    top: -4,
    borderRadius: 10,
  },
});
