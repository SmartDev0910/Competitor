import React, {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, View, Image, Text} from 'react-native';
import Geocoder from 'react-native-geocoding';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remember to import PROVIDER_GOOGLE

// import { useDispatch } from 'react-redux';
import {GOOGLE_MAPS_API_KEY} from '../../constants/env';

Geocoder.init(GOOGLE_MAPS_API_KEY);

const AddressView = ({navigation}) => {
  const [address, setAddress] = useState(
    '26 Lombard Street East, Dublin, Ireland',
  );

  const [region, setRegion] = useState({
    latitude: 53.3472,
    longitude: -6.2621,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapRef = useRef(null);
  //   const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setRegion({
        latitude: 53.3472,
        longitude: -6.2621,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }, 1000);
  }, []);

  const onRegionChangeComplete = async region => {
    const {latitude, longitude} = region;

    try {
      const geo = await Geocoder.from(latitude, longitude).catch(e => {
        return {status: 'ERROR', results: []};
      });
      if (geo.results.length > 0) {
        const address = geo.results[0].formatted_address;
        setAddress(address);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const nextStep = () => {
    // dispatch(saveAddress(address));
    // dispatch(saveLocation(location));
    // navigation.navigate('StoreCheck', { location, address });
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // <-- Add this line
        ref={mapRef}
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={onRegionChangeComplete}
      />
      {/* <Image source={require('../../../assets/marker.png')} style={styles.markerFixed} /> */}
      <View style={styles.addressBar}>
        <Text style={styles.input} numberOfLines={2} ellipsizeMode="tail">
          {address}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Confirm" onPress={nextStep} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -13,
    marginTop: -42,
    position: 'absolute',
    top: '50%',
  },
  addressBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    overflow: 'hidden',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default AddressView;
