import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import ViewEventAppbar from '../../../components/events/ViewEventAppbar';
import {
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import AboutEventView from './AboutEventView';
import FeedView from './FeedView';
import ClassesView from './ClassesView';
import FeesView from './FeesView';
import EligibilityView from './EligibilityView';
import DocsView from './DocsView';
import TeamView from './TeamView';

function ViewEventScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'feed', title: 'Feed'},
    {key: 'about', title: 'About'},
    {key: 'classes', title: 'Classes'},
    {key: 'fees', title: 'Fees'},
    {key: 'eligibility', title: 'Eligibility'},
    {key: 'docs', title: 'Docs'},
    {key: 'team', title: 'Team'},
  ]);

  const AboutTab = () => <AboutEventView />;
  const FeedTab = () => <FeedView navigation={navigation} />;
  const ClassesTab = () => <ClassesView navigation={navigation} />;
  const FeesTab = () => <FeesView navigation={navigation} />;
  const EligibilityTab = () => <EligibilityView navigation={navigation} />;
  const DocsTab = () => <DocsView navigation={navigation} />;
  const TeamTab = () => <TeamView navigation={navigation} />;

  const renderScene = SceneMap({
    about: AboutTab,
    feed: FeedTab,
    classes: ClassesTab,
    fees: FeesTab,
    eligibility: EligibilityTab,
    docs: DocsTab,
    team: TeamTab,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: COLOR_PINK}}
      style={{backgroundColor: COLOR_WHITE}}
      scrollEnabled
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
      <ViewEventAppbar navigation={navigation} />
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
  TabViewWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default ViewEventScreen;
