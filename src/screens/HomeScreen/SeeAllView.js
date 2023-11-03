import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import {
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

import ItemsListFragment from './ItemsListFragment';

const LicensedTab = () => <ItemsListFragment />;
const UnlicensedTab = () => (
  <View style={styles.TabViewWrapper}>
    <Text>Unlicensed Tab</Text>
  </View>
);
const ClinicsTab = () => (
  <View style={styles.TabViewWrapper}>
    <Text>Clinics Tab</Text>
  </View>
);
const OtherTab = () => (
  <View style={styles.TabViewWrapper}>
    <Text>Other Tab</Text>
  </View>
);

function SeeAllView() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'licensed', title: 'Licensed'},
    {key: 'unlicensed', title: 'Unlicensed'},
    {key: 'clinics', title: 'Clinics'},
    {key: 'other', title: 'Other'},
  ]);

  const renderScene = SceneMap({
    licensed: LicensedTab,
    unlicensed: UnlicensedTab,
    clinics: ClinicsTab,
    other: OtherTab,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: COLOR_PINK}}
      style={{backgroundColor: COLOR_WHITE}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? COLOR_PINK : COLOR_FONT_DEFAULT,
            fontSize: 14,
            fontFamily: FONT_REGULAR,
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
    />
  );
}

const styles = StyleSheet.create({
  TabViewWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default SeeAllView;
