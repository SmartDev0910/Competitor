import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {FONT_BOLD, FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {
  AddUserMaleIcon,
  ArrowLeftIcon,
  CalendarIcon,
  CalendarOutlinedIcon,
  CameraIcon,
  ClockIcon,
  LockIcon,
  SettingsIcon,
  SpeechBubbleIcon,
  SynchronizeIcon,
  UserGroupsIcon,
  UserGroupsOutlinedIcon,
  UserIcon,
  YearOfHorseIcon,
  YearOfHorseOutlinedIcon,
} from '../../constants/icons';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_GREY_CAMERA,
} from '../../constants/colors';
import {ProfileEditImage} from '../../constants/images';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import AuthorizeView from './AuthorizeView';

const ProfileScreen = ({navigation}) => {
  const [index, setIndex] = useState(2);
  const [routes] = useState([
    {key: 'user', title: 'User'},
    {key: 'events', title: 'Events'},
    {key: 'people', title: 'People'},
    {key: 'past', title: 'Past'},
    {key: 'lock', title: 'Lock'},
  ]);

  const UserTab = () => <AuthorizeView />;
  const EventsTab = () => <AuthorizeView />;
  const PeopleTab = () => <AuthorizeView />;
  const PastTab = () => <AuthorizeView />;
  const LockTab = () => <AuthorizeView />;

  const renderScene = SceneMap({
    events: EventsTab,
    past: PastTab,
    people: PeopleTab,
    user: UserTab,
    lock: LockTab,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: COLOR_PINK,
      }}
      style={{backgroundColor: COLOR_WHITE}}
      renderLabel={({route, focused, color}) => {
        switch (route.key) {
          case 'user':
            return (
              <Image
                source={focused ? UserIcon : UserIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'events':
            return (
              <Image
                source={focused ? SynchronizeIcon : SynchronizeIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'people':
            return (
              <Image
                source={focused ? UserGroupsOutlinedIcon : UserGroupsIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'past':
            return (
              <Image
                source={focused ? YearOfHorseOutlinedIcon : YearOfHorseIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'lock':
            return (
              <Image
                source={focused ? LockIcon : LockIcon}
                style={styles.TabTitleIcon}
              />
            );
        }
      }}
    />
  );

  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.Appbar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
          </TouchableOpacity>
          <Text style={styles.AppbarTextFont}>Edit Profile</Text>
        </View>
        <View style={styles.ProfileView}>
          <Image source={ProfileEditImage} style={styles.ProfileEditImage} />
          <View style={styles.CameraView}>
            <Image source={CameraIcon} style={styles.CameraIcon} />
          </View>
        </View>
        <View style={styles.AuthorizeView}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
          />
          <AuthorizeView />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  Appbar: {
    height: 36,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  AppbarButton: {
    width: 22,
    height: 22,
  },
  AppbarTextFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_DEFAULT,
    fontSize: 24,
    marginLeft: 7,
  },
  ProfileView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  ProfileEditImage: {
    width: 120,
    height: 120,
    marginTop: 12,
  },
  OrganizerTitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 20,
    color: COLOR_FONT_DEFAULT,
    marginVertical: 12,
  },
  ActionButtonView: {
    flexDirection: 'row',
    marginHorizontal: 44,
    gap: 8,
    marginTop: 14,
  },
  FollowerDetail: {
    marginVertical: 25,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 76,
    backgroundColor: COLOR_WHITE,
    marginHorizontal: 22,
    paddingHorizontal: 14,
  },
  DetailItemView: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  DetailItemTitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    textAlign: 'center',
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
  },
  DetailItemDescFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_BUTTON_DEFAULT,
  },
  AuthorizeView: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: COLOR_WHITE,
    paddingTop: 25,
  },
  TabTitleIcon: {
    width: 24,
    height: 24,
  },
  CameraView: {
    width: 30,
    height: 30,
    borderRadius: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_GREY_CAMERA,
    position: 'absolute',
    bottom: 2,
    right: '37%',
  },
});

export default ProfileScreen;
