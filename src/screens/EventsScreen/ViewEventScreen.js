import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import ViewEventAppbar from '../../components/events/ViewEventAppbar';
import {
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import AboutEventView from './AboutEventView';

function ViewEventScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'about', title: 'About'},
    {key: 'classes', title: 'Classes'},
    {key: 'fees', title: 'Fees'},
    {key: 'eligibility', title: 'Eligibility'},
    {key: 'docs', title: 'Docs'},
    {key: 'team', title: 'Team'},
  ]);

  const AboutTab = () => <AboutEventView />;
  const ClassesTab = () => (
    <View style={styles.TabViewWrapper}>
      <Text>Classes Tab</Text>
    </View>
  );
  const FeesTab = () => (
    <View style={styles.TabViewWrapper}>
      <Text>Fees Tab</Text>
    </View>
  );
  const EligibilityTab = () => (
    <View style={styles.TabViewWrapper}>
      <Text>Eligibility Tab</Text>
    </View>
  );
  const DocsTab = () => (
    <View style={styles.TabViewWrapper}>
      <Text>Docs Tab</Text>
    </View>
  );
  const TeamTab = () => (
    <View style={styles.TabViewWrapper}>
      <Text>Team Tab</Text>
    </View>
  );

  const renderScene = SceneMap({
    about: AboutTab,
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
