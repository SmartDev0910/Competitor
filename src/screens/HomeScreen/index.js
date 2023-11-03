import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';
import ImageButton from '../../components/home/ImageButton';

import {
  DataTransferIcon,
  MapIcon,
  MapOutlinedIcon,
  DropDownIcon,
  SearchIcon,
} from '../../constants/icons';
import FilterEventsModal from '../../components/home/FilterEventsModal';
import {MapMarsWinterImage} from '../../constants/images';
import SearchModal from '../../components/home/SearchModal';
import MainFragment from './mainFragment';

const LicensedTab = () => <MainFragment />;
const LicensedMapViewTab = () => (
  <Image source={MapMarsWinterImage} style={styles.MapMarsWinterImage} />
);
const UnlicensedTab = () => (
  <View>
    <Text>Tab</Text>
  </View>
);

function HomeScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [mapViewVisible, setMapViewVisible] = React.useState(false);
  const [searchModalVisible, setSearchModalVisible] = React.useState(false);
  const [routes] = useState([
    {key: 'licensed', title: 'Licensed'},
    {key: 'unlicensed', title: 'Unlicensed'},
    {key: 'clinics', title: 'Clinics'},
    {key: 'other', title: 'Other'},
    {key: 'follow', title: 'Follow'},
  ]);

  const renderScene = SceneMap({
    licensed: mapViewVisible ? LicensedMapViewTab : LicensedTab,
    unlicensed: UnlicensedTab,
    clinics: UnlicensedTab,
    other: UnlicensedTab,
    follow: UnlicensedTab,
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

  const handleFilterEvents = () => {
    setModalVisible(true);
    setMapViewVisible(false);
  };

  const handleMapView = () => {
    setMapViewVisible(!mapViewVisible);
  };

  const handleSearchModal = () => {
    setSearchModalVisible(true);
    setMapViewVisible(false);
  };

  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <View style={styles.CurrentLocation}>
          <View style={styles.LocationView}>
            <Text style={styles.LocationTitle}>Current Location</Text>
            <Image source={DropDownIcon} style={styles.DropDownIcon} />
          </View>
          <Text
            style={styles.LocationDetail}
            onPress={() => navigation.navigate('SearchScreen')}>
            Middleburg, VA
          </Text>
        </View>
        <View style={styles.AppTopButtonView}>
          <ImageButton
            source={SearchIcon}
            style={styles.TopButton}
            viewStyle={styles.TopButtonView}
            onPress={handleSearchModal}
          />
          <ImageButton
            source={DataTransferIcon}
            style={styles.TopButton}
            viewStyle={styles.TopButtonView}
            onPress={handleFilterEvents}
          />
          <ImageButton
            source={mapViewVisible ? MapOutlinedIcon : MapIcon}
            style={styles.TopButton}
            viewStyle={styles.TopButtonView}
            active={mapViewVisible}
            onPress={handleMapView}
          />
        </View>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      />
      <FilterEventsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <SearchModal
        modalVisible={searchModalVisible}
        setModalVisible={setSearchModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
    flex: 1,
  },
  Appbar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    // gap: 1,
  },
  CurrentLocation: {
    flexDirection: 'column',
  },
  LocationTitle: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_DEFAULT,
  },
  LocationDetail: {
    fontFamily: FONT_BOLD,
    fontSize: 13,
    color: COLOR_FONT_DEFAULT,
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
  AppTopButtonView: {
    flexDirection: 'row',
    gap: 10,
  },
  LocationView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  DropDownIcon: {
    width: 10,
    height: 5,
  },
  MapMarsWinterImage: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
