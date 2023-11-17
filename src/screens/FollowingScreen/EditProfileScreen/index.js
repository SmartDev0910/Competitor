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
  ArrowLeftIcon,
  CameraIcon,
  LockIcon,
  LockOutlinedIcon,
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
import TeamSettingsView from './TeamSettingsView';
import UserView from './UserView';
import SynchronizeView from './SynchronizeView';
import HorsesSettingsView from './HorsesSettingsView';
import AccountDetailView from './AccountDetailView';

const EditProfileScreen = ({navigation}) => {
  const [index, setIndex] = useState(2);
  const [routes] = useState([
    {key: 'user', title: 'User'},
    {key: 'synchronize', title: 'Events'},
    {key: 'team', title: 'Team'},
    {key: 'horses', title: 'Horses'},
    {key: 'account', title: 'Account'},
  ]);

  const UserTab = () => <UserView navigation={navigation} />;
  const SynchronizeTab = () => <SynchronizeView navigation={navigation} />;
  const TeamSettingsTab = () => <TeamSettingsView />;
  const HorsesSettingsTab = () => <HorsesSettingsView />;
  const AccountDetailTab = () => <AccountDetailView navigation={navigation} />;

  const renderScene = SceneMap({
    user: UserTab,
    synchronize: SynchronizeTab,
    team: TeamSettingsTab,
    horses: HorsesSettingsTab,
    account: AccountDetailTab,
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
          case 'synchronize':
            return (
              <Image
                source={focused ? SynchronizeOutlinedIcon : SynchronizeIcon}
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
          case 'account':
            return (
              <Image
                source={focused ? LockOutlinedIcon : LockIcon}
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
        <View style={styles.TeamSettingsView}>
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
  TeamSettingsView: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: COLOR_WHITE,
    paddingTop: 25,
    height: height - 140,
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

export default EditProfileScreen;
