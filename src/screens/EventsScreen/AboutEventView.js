import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {AboutEventImage} from '../../constants/images';
import ZoetisPane from '../../components/events/ZoetisPane';

const AboutEventView = () => {
  return (
    <View>
      <Image source={AboutEventImage} style={styles.AboutEventImage} />
      <View style={styles.ZoetisPane}>
        <ZoetisPane />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AboutEventImage: {
    height: 235,
    width: '100%',
  },
  ZoetisPane: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
  },
});

export default AboutEventView;
