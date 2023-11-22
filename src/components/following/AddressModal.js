import React, {useState, useRef, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
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
import {LaurelWreathIcon} from '../../constants/icons';
import GovermentRecordsModal from './GovermentRecordsModal';
import SearchMapText from '../home/SearchMapText';
import {GOOGLE_MAPS_API_KEY} from '../../constants/env';
import Geocoder from 'react-native-geocoding';
import MapView from 'react-native-maps';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

Geocoder.init(GOOGLE_MAPS_API_KEY);

const AddressModal = ({modalVisible, setModalVisible}) => {
  const [showGovermentRecordsModal, setShowGovermentRecordsModal] =
    useState(false);
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

  const handleGovermentRecordsModal = () => {
    setModalVisible(false);
    setShowGovermentRecordsModal(true);
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
    </>
  );

  return (
    <>
      <SafeAreaView>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.OverlayStyle} />
          <View style={styles.ModalView}>
            <View style={styles.Appbar}>
              <Text style={styles.ModalTitleFont}>Address</Text>
              <TouchableOpacity
                style={styles.RightIconView}
                onPress={handleGovermentRecordsModal}>
                <Image source={LaurelWreathIcon} style={styles.RightIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.ModalContentView}>
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
                <Text style={[styles.TextStyle, styles.TextCancel]}>
                  Cancel
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <GovermentRecordsModal
          modalVisible={showGovermentRecordsModal}
          setModalVisible={setShowGovermentRecordsModal}
          value={'Australia'}
        />
      </SafeAreaView>
    </>
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
  Appbar: {
    height: 36,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  RightIconView: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: COLOR_FONT_DEFAULT,
    borderWidth: 1,
  },
  RightIcon: {
    width: 14,
    height: 14,
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
    fontFamily: FONT_REGULAR,
    fontSize: 25,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
  },
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 30,
    width: width - 48,
  },
  ModalContentView: {
    paddingHorizontal: 16,
    flexDirection: 'column',
    marginTop: 20,
  },
  HelpTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  SearchMapText: {
    width: width - 130,
    height: 50,
  },
  MapWellingtonImage: {
    width: '100%',
    height: '60%',
    marginVertical: 20,
  },
});

export default AddressModal;
