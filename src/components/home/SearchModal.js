import React, {useState, useEffect, useRef} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  Image,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_FONT_DEFAULT,
  COLOR_MODAL_OVERLAY,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {MapWellingtonImage} from '../../constants/images';
import RadiusSliderPane from './RadiusSliderPane';
import SearchMapText from './SearchMapText';
import {GOOGLE_MAPS_API_KEY} from '../../constants/env';
import Geocoder from 'react-native-geocoding';
import MapView from 'react-native-maps';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

Geocoder.init(GOOGLE_MAPS_API_KEY);

const SearchModal = ({modalVisible, setModalVisible}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [searchText, setSearchText] = useState('');
  // const [address, setAddress] = useState('26 Lombard Street East, Dublin, Ireland');
  const [location, setLocation] = useState({lat: 53.3472, lng: -6.2621});
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  const onRegionChangeComplete = async region => {
    const {latitude, longitude} = region;

    try {
      const geo = await Geocoder.from(latitude, longitude).catch(e => {
        return {status: 'ERROR', results: []};
      });
      if (geo.results.length > 0) {
        // const address = geo.results[0].formatted_address;
        // setAddress(address);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSliderValueChange = value => {
    setSliderValue(value);
  };

  const onChangeText = text => {
    setSearchText(text);
  };

  const MapPane = (
    <>
      <MapView
        ref={mapRef}
        style={styles.MapWellingtonImage}
        initialRegion={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={onRegionChangeComplete}
      />
      {/* <Image source={MapWellingtonImage} style={styles.MapWellingtonImage} /> */}
      <View style={styles.ScrollView}>
        <RadiusSliderPane
          style={styles.RadiusSliderPane}
          title="Select radius"
          value={sliderValue}
          onValueChange={handleSliderValueChange}
        />
      </View>
    </>
  );

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <View style={styles.BottomButton}>
            <SearchMapText
              style={[styles.SearchMapText]}
              value={searchText}
              onChangeText={onChangeText}
            />
          </View>
          {MapPane}
          <View style={styles.BottomButton}>
            <Pressable style={[styles.Button, styles.ButtonApply]}>
              <Text style={[styles.TextStyle, styles.TextApply]}>Save</Text>
            </Pressable>
            <Pressable
              style={[styles.Button, styles.ButtonCancel]}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.TextStyle, styles.TextCancel]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  OverlayStyle: {
    backgroundColor: COLOR_MODAL_OVERLAY,
    position: 'absolute',
    width: width,
    height: height,
  },
  ModalView: {
    marginTop: 106,
    width: width,
    height: height - 106,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  ScrollView: {
    paddingHorizontal: 24,
  },
  Button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
    marginTop: 20,
  },
  ButtonCancel: {
    backgroundColor: COLOR_BUTTON_CANCEL,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextCancel: {
    color: COLOR_BUTTON_DEFAULT,
  },
  TextApply: {
    color: COLOR_WHITE,
  },
  ModalTitleFont: {
    marginBottom: 15,
    fontFamily: FONT_REGULAR,
    fontSize: 25,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
    marginHorizontal: 24,
  },
  SubTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 34,
  },
  RadiusSliderPane: {
    marginVertical: 10,
    width: '100%',
  },
  BottomButton: {
    marginHorizontal: 24,
  },
  SearchMapText: {
    width: '82%',
    height: 50,
  },
  MapWellingtonImage: {
    width: '100%',
    height: '50%',
    marginVertical: 20,
  },
});

export default SearchModal;
