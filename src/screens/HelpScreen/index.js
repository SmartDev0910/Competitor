import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_BOLD} from '../../constants/fonts';
import HelpView from './HelpView';
import FAQView from './FAQView';
import PoliciesView from './PoliciesView';

function HelpScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'help', title: 'Help'},
    {key: 'faq', title: 'FAQ'},
    {key: 'policies', title: 'Policies'},
  ]);

  const HelpTab = () => <HelpView navigation={navigation} />;

  const FAQTab = () => <FAQView navigation={navigation} />;

  const PoliciesTab = () => <PoliciesView navigation={navigation} />;

  const renderScene = SceneMap({
    help: HelpTab,
    faq: FAQTab,
    policies: PoliciesTab,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: COLOR_PINK}}
      style={{backgroundColor: COLOR_WHITE}}
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
      <Text style={styles.TitleFont}>Help</Text>
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
  TopButton: {
    width: 24,
    height: 24,
  },
  TopButtonView: {
    borderWidth: 1,
    borderColor: COLOR_FONT_COMMENT,
    borderRadius: 45,
    padding: 3,
  },
  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 20,
    color: COLOR_FONT_DEFAULT,
    marginVertical: 10,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
});

export default HelpScreen;
