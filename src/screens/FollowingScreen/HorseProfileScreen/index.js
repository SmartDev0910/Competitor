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
  BiotechIcon,
  BiotechOutlinedIcon,
  DocumentsIcon,
  DocumentsOutlinedIcon,
  PeopleIcon,
  PeopleOutlinedIcon,
  PrizeIcon,
  SettingsIcon,
  SpeechBubbleIcon,
  SynchronizeIcon,
  SynchronizeOutlinedIcon,
  YearOfHorseIcon,
  YearOfHorseOutlinedIcon,
} from '../../../constants/icons';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
} from '../../../constants/colors';
import {SkippyProfileImage} from '../../../constants/images';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import FollowButton from '../../../components/following/FollowButton';
import HorseDetailView from './HorseDetailView';
import DocumentView from './DocumentView';
import TeamView from './TeamView';
import LineageView from './LineageView';

const HorseProfileScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'horse_detail', title: 'Horse Detail'},
    {key: 'document', title: 'Document'},
    {key: 'team', title: 'Team'},
    {key: 'lineage', title: 'Lineage'},
  ]);

  const HorseDetailTab = () => <HorseDetailView />;
  const DocumentTab = () => <DocumentView />;
  const TeamTab = () => <TeamView />;
  const LineageTab = () => <LineageView />;

  const renderScene = SceneMap({
    horse_detail: HorseDetailTab,
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
                source={focused ? PeopleOutlinedIcon : PeopleIcon}
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
          <Text style={styles.AppbarTextFont}>Horse Profile</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingHorseProfileScreen')}>
            <Image source={SettingsIcon} style={styles.AppbarButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileView}>
          <Image
            source={SkippyProfileImage}
            style={styles.SkippyProfileImage}
          />
          <Text style={styles.ProfileTitleFont}>Skippy</Text>
        </View>
        <View style={styles.ActionButtonView}>
          <FollowButton icon={AddUserMaleIcon} text="Connect" />
          <FollowButton icon={SpeechBubbleIcon} text="Message" />
        </View>
        <View style={styles.FollowerDetail}>
          <View style={styles.DetailItemView}>
            <Text style={styles.DetailItemTitleFont}>Dressage</Text>
            <Text style={styles.DetailItemDescFont}>Discipline</Text>
          </View>
          <View style={styles.DetailItemView}>
            <Text style={styles.DetailItemTitleFont}>4</Text>
            <Text style={styles.DetailItemDescFont}>Zone</Text>
          </View>
          <View style={styles.DetailItemView}>
            <Text style={styles.DetailItemTitleFont}>USA</Text>
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
  SkippyProfileImage: {
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

export default HorseProfileScreen;
