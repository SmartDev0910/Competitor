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
  BiotechIcon,
  BiotechOutlinedIcon,
  CameraIcon,
  DocumentsIcon,
  DocumentsOutlinedIcon,
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
import {SkippyProfileImage} from '../../../constants/images';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import HorseDetailView from './HorseDetailView';

const SettingHorseProfileScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'horse_detail', title: 'Horse Detail'},
    {key: 'synchronize', title: 'Events'},
    {key: 'document', title: 'Document'},
    {key: 'team', title: 'Team'},
    {key: 'lineage', title: 'Lineage'},
  ]);

  const HorseDetailTab = () => <HorseDetailView navigation={navigation} />;
  const SynchronizeTab = () => <Text>SynchronizeTab</Text>;
  const DocumentTab = () => <Text>DocumentTab</Text>;
  const TeamTab = () => <Text>TeamTab</Text>;
  const LineageTab = () => <Text>LineageTab</Text>;

  const renderScene = SceneMap({
    horse_detail: HorseDetailTab,
    synchronize: SynchronizeTab,
    document: DocumentTab,
    team: TeamTab,
    lineage: LineageTab,
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
          case 'horse_detail':
            return (
              <Image
                source={focused ? YearOfHorseOutlinedIcon : YearOfHorseIcon}
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
          case 'document':
            return (
              <Image
                source={focused ? DocumentsOutlinedIcon : DocumentsIcon}
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
          case 'lineage':
            return (
              <Image
                source={focused ? BiotechOutlinedIcon : BiotechIcon}
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
          <Text style={styles.AppbarTextFont}>Settings</Text>
        </View>
        <View style={styles.ProfileView}>
          <Image
            source={SkippyProfileImage}
            style={styles.SkippyProfileImage}
          />
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
  SkippyProfileImage: {
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

export default SettingHorseProfileScreen;
