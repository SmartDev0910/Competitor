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
import MessageView from './MessageView';
import ImageButton from '../../components/home/ImageButton';
import {SearchIcon} from '../../constants/icons';

function MessageScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'all', title: 'All'},
    {key: 'unread', title: 'Unread'},
    {key: 'read', title: 'Read'},
  ]);

  const AllTab = () => (
    <MessageView navigation={navigation} visibleAction={true} />
  );

  const UnreadTab = () => (
    <MessageView navigation={navigation} visibleAction={true} />
  );

  const ReadTab = () => (
    <MessageView navigation={navigation} visibleAction={true} />
  );

  const renderScene = SceneMap({
    all: AllTab,
    unread: UnreadTab,
    read: ReadTab,
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

  const handleSearchModal = () => {
    navigation.navigate('MessageSearchScreen');
  };

  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <Text style={styles.TitleFont}>Messages</Text>
        <ImageButton
          source={SearchIcon}
          style={styles.TopButton}
          viewStyle={styles.TopButtonView}
          onPress={handleSearchModal}
        />
      </View>
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
  Appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginVertical: 10,
    paddingTop: 20,
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
  },
});

export default MessageScreen;
