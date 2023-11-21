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
  ClockIcon,
  ClockOutlinedIcon,
  SettingsIcon,
  SpeechBubbleIcon,
  UserGroupsIcon,
  UserGroupsOutlinedIcon,
  UserIcon,
  UserOutlinedIcon,
} from '../../../constants/icons';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
} from '../../../constants/colors';
import {OrganizerProfileImage} from '../../../constants/images';
import FollowButton from '../../../components/following/FollowButton';
import UpcomingEventsView from './UpcomingEventsView';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import AboutView from './AboutView';
import StaffView from './StaffView';

const OrganizerProfileScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'events', title: 'Events'},
    {key: 'past', title: 'Past'},
    {key: 'staff', title: 'Staff'},
    {key: 'about', title: 'About'},
  ]);

  const EventsTab = () => <UpcomingEventsView navigation={navigation} />;

  const PastTab = () => <UpcomingEventsView navigation={navigation} />;

  const StaffTab = () => <StaffView navigation={navigation} />;

  const AboutTab = () => <AboutView navigation={navigation} />;

  const renderScene = SceneMap({
    events: EventsTab,
    past: PastTab,
    staff: StaffTab,
    about: AboutTab,
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
          case 'events':
            return (
              <Image
                source={focused ? CalendarOutlinedIcon : CalendarIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'past':
            return (
              <Image
                source={focused ? ClockOutlinedIcon : ClockIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'staff':
            return (
              <Image
                source={focused ? UserGroupsOutlinedIcon : UserGroupsIcon}
                style={styles.TabTitleIcon}
              />
            );
          case 'about':
            return (
              <Image
                source={focused ? UserOutlinedIcon : UserIcon}
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
          <Image
            source={OrganizerProfileImage}
            style={styles.OrganizerProfileImage}
          />
          <Text style={styles.OrganizerTitleFont}>Pegasus Stables</Text>
        </View>
        <View style={styles.ActionButtonView}>
          <FollowButton icon={AddUserMaleIcon} text="Follow" />
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
            <Text style={styles.DetailItemTitleFont}>FL, USA</Text>
            <Text style={styles.DetailItemDescFont}>Location</Text>
          </View>
        </View>
        <View style={styles.UpcomingEventsView}>
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
  OrganizerProfileImage: {
    width: 120,
    height: 120,
    marginTop: 11,
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
  UpcomingEventsView: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: COLOR_WHITE,
    paddingTop: 25,
    height: height - 200,
  },
  TabTitleIcon: {
    width: 24,
    height: 24,
  },
});

export default OrganizerProfileScreen;
