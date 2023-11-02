import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
const FirstTab = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const SecondTab = () => (
  <ScrollView style={{backgroundColor: '#FFF'}}>
    <View style={styles.Wrapper}>
      <Text>Your Following Screen</Text>
    </View>
  </ScrollView>
);

const initialLayout = {width: 'auto'};
function FollowingScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstTab,
    second: SecondTab,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: 'skyblue'}}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#3f51b5',
    flex: 1,
    padding: 40,
  },
  scene: {
    flex: 1,
  },
});

export default FollowingScreen;
