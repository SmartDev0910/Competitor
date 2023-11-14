import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  FONT_BOLD,
  FONT_REGULAR,
  FONT_SEMI_BOLD,
} from '../../../constants/fonts';
import {
  AddUserMaleIcon,
  ArrowLeftIcon,
  CalendarIcon,
  CalendarOutlinedIcon,
  CameraIcon,
  ClockIcon,
  ClockOutlinedIcon,
  LockIcon,
  LockOutlinedIcon,
  SettingsIcon,
  SpeechBubbleIcon,
  SynchronizeIcon,
  SynchronizeOutlinedIcon,
  UserGroupsIcon,
  UserGroupsOutlinedIcon,
  UserIcon,
  UserOutlinedIcon,
  YearOfHorseIcon,
  YearOfHorseOutlinedIcon,
} from '../../../constants/icons';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_GREY_CAMERA,
} from '../../../constants/colors';
import {ProfileEditImage} from '../../../constants/images';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import FollowButton from '../../../components/following/FollowButton';
import UpcomingEventsView from './UpcomingEventsView';
import PastEventsView from './PastEventsView';

const ProfileScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'user', title: 'User'},
    {key: 'team', title: 'Events'},
    {key: 'horses', title: 'Past'},
    {key: 'upcoming_events', title: 'Upcoming Events'},
    {key: 'past_events', title: 'Past Events'},
  ]);

  const UserTab = () => <Text>User</Text>;
  const TeamTab = () => <Text>Team</Text>;
  const HorsesTab = () => <Text>Horses</Text>;
  const UpcomingEventsTab = () => <UpcomingEventsView />;
  const PastEventsTab = () => <PastEventsView />;

  const renderScene = SceneMap({
    user: UserTab,
    team: TeamTab,
    horses: HorsesTab,
    upcoming_events: UpcomingEventsTab,
    past_events: PastEventsTab,
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
                source={focused ? UserOutlinedIcon : UserIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'team':
            return (
              <Image
                source={focused ? UserGroupsOutlinedIcon : UserGroupsIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'horses':
            return (
              <Image
                source={focused ? YearOfHorseOutlinedIcon : YearOfHorseIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'upcoming_events':
            return (
              <Image
                source={focused ? CalendarOutlinedIcon : CalendarIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'past_events':
            return (
              <Image
                source={focused ? ClockOutlinedIcon : ClockIcon}
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
          <Text style={styles.AppbarTextFont}>Profile</Text>
          <Image source={SettingsIcon} style={styles.AppbarButton} />
        </View>
        <View style={styles.ProfileView}>
          <Image source={ProfileEditImage} style={styles.ProfileEditImage} />
          <Text style={styles.ProfileTitleFont}>David Silbia</Text>
        </View>
        <View style={styles.ActionButtonView}>
          <FollowButton icon={AddUserMaleIcon} text="Connect" />
          <FollowButton icon={SpeechBubbleIcon} text="Message" />
        </View>
        <View style={styles.FollowerDetail}>
          <View style={styles.DetailItemView}>
            <Text style={styles.DetailItemTitleFont}>Jumper</Text>
            <Text style={styles.DetailItemDescFont}>Discipline</Text>
          </View>
          <View style={styles.DetailItemView}>
            <Text style={styles.DetailItemTitleFont}>4</Text>
            <Text style={styles.DetailItemDescFont}>Zone</Text>
          </View>
          <View style={styles.DetailItemView}>
            <Text style={styles.DetailItemTitleFont}>AUS</Text>
            <Text style={styles.DetailItemDescFont}>Nationality</Text>
          </View>
        </View>
        <View style={styles.AuthorizeView}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  Appbar: {
    height: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  AppbarButton: {
    width: 22,
    height: 22,
  },
  AppbarTextFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_BUTTON_DEFAULT,
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
  ProfileTitleFont: {
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
    height: height - 160,
  },
  TabTitleIcon: {
    width: 24,
    height: 24,
  },
});

export default ProfileScreen;
