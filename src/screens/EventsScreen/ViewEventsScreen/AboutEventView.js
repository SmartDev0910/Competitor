import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import {AboutEventImage, EventLogo1Image} from '../../../constants/images';
import ZoetisPane from '../../../components/events/ZoetisPane';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../../constants/colors';
import {
  FONT_BOLD,
  FONT_REGULAR,
  FONT_SEMI_BOLD,
} from '../../../constants/fonts';
import EventItems from '../../../constants/events/eventitems';
import EventItem from '../../../components/events/EventItem';
import EventAboutPane from '../../../components/events/EventAboutPane';
import StatisticPane from '../../../components/events/StatisticPane';
import Divider from '../../../components/home/Divider';
import Keydata from '../../../constants/events/keydata';
import KeyDataItem from '../../../components/events/KeyDataItem';
import OnSiteVendors from '../../../constants/events/onsiteVendors';
import FeeData from '../../../constants/events/feedata';
import FeeDataItem from '../../../components/events/FeeDataItem';

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
          <EventAboutPane
            title="Palm Beach International Equestria..."
            role="Event Organizer"
            image={EventLogo1Image}
          />
          <StatisticPane />
          <Divider style={styles.Divider} />
          <View style={styles.AboutTextView}>
            <Text style={styles.AboutTextFont}>About</Text>
            <Text style={styles.AboutTextDetailFont}>
              Come celebrate our 25th anniversary at HITS Commonwealth Park!
              This year, HITS Culpeper will feature six weeks of USEF
              competition in the heart of Virginia's Horse Country. Just one
              hour from Washington, D.C., HITS Commonwealth Park boasts a 100+
              accounts...
            </Text>
            <Text style={styles.ShowMoreFont}>{'Show more >'}</Text>
          </View>
          <Divider style={styles.Divider} />
          <View style={styles.KeyDataView}>
            <Text style={styles.AboutTextFont}>Key Data</Text>
            {Keydata.map((item, index) => {
              return (
                <KeyDataItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  itemTitle1={item.itemTitle1}
                  itemValue1={item.itemValue1}
                  itemTitle2={item.itemTitle2}
                  itemValue2={item.itemValue2}
                />
              );
            })}
          </View>
          <Divider style={styles.Divider} />
          <View style={styles.KeyDataView}>
            <Text style={[styles.AboutTextFont, {marginBottom: 20}]}>
              Sponsors & Vendors
            </Text>
            {OnSiteVendors.map((item, index) => {
              return (
                <EventAboutPane
                  key={index}
                  title={item.title}
                  role={item.role}
                  image={item.image}
                />
              );
            })}
            <Text style={styles.ShowMoreFont}>{'Show more >'}</Text>
          </View>
          <Divider style={styles.Divider} />
          <View style={styles.KeyDataView}>
            <Text style={styles.AboutTextFont}>Fees</Text>
            {FeeData.map((item, index) => {
              return (
                <FeeDataItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  itemTitle1={item.itemTitle1}
                  itemValue1={item.itemValue1}
                  itemTitle2={item.itemTitle2}
                  itemValue2={item.itemValue2}
                  itemTitle3={item.itemTitle3}
                  itemValue3={item.itemValue3}
                  itemTitle4={item.itemTitle4}
                  itemValue4={item.itemValue4}
                />
              );
            })}
          </View>

          <Pressable style={[styles.Button, styles.ButtonApply]}>
            <Text style={[styles.TextStyle, styles.TextApply]}>Register</Text>
          </Pressable>
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
  Divider: {
    height: 1,
    backgroundColor: COLOR_EVENT_BORDER,
    marginTop: 30,
    marginBottom: 20,
  },
  AboutTextView: {
    flexDirection: 'column',
  },
  AboutTextFont: {
    fontFamily: FONT_BOLD,
    fontSize: 18,
    color: COLOR_PINK,
    lineHeight: 34,
    marginBottom: 10,
  },
  AboutTextDetailFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    marginBottom: 10,
  },
  ShowMoreFont: {
    textDecorationLine: 'underline',
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  KeyDataView: {
    flexDirection: 'column',
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
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextApply: {
    color: COLOR_WHITE,
  },
});

export default AboutEventView;
