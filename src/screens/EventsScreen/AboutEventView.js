import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {AboutEventImage} from '../../constants/images';
import ZoetisPane from '../../components/events/ZoetisPane';
import {COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';
import EventItems from '../../constants/events/eventitems';
import EventItem from '../../components/events/EventItem';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AboutEventView = () => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <Image source={AboutEventImage} style={styles.AboutEventImage} />
        <View style={styles.ZoetisPane}>
          <ZoetisPane />
        </View>
        <View style={styles.EventDetailView}>
          <Text style={styles.EventTitleFont}>
            WEF Winter Festival and side clinic
          </Text>
          <Text style={styles.EventDescFont}>
            The Event at WEF showcases the Olympic sport of show jumping in the
            betiful lands of Wellington, Florida.
          </Text>
          {EventItems.map((item, index) => {
            return (
              <EventItem
                key={index}
                title={item.title}
                statusText={item.statusText}
                image={item.image}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  AboutEventImage: {
    height: 235,
    width: '100%',
  },
  ZoetisPane: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: 205,
    left: (width - 255) / 2,
  },
  EventDetailView: {
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  EventTitleFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_BOLD,
    fontSize: 25,
    flexWrap: 'wrap',
    marginTop: 50,
  },
  EventDescFont: {
    fontFamily: FONT_REGULAR,
    lineHeight: 25,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    marginTop: 5,
    marginBottom: 20,
  },
});

export default AboutEventView;
