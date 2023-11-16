import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  AboutEventImage,
  EventLogo1Image,
  LocationMapImage,
} from '../../../constants/images';
import ZoetisPane from '../../../components/events/ZoetisPane';
import {
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
import StaffItem from '../../../components/events/StaffItem';
import StaffsData from '../../../constants/events/staffs';
import PoliciesData from '../../../constants/events/policies';
import PolicyItem from '../../../components/events/PolicyItem';
import PaperworksData from '../../../constants/events/paperworks';
import PaperworkItem from '../../../components/events/PaperworkItem';
import {PhoneIcon, UserIcon} from '../../../constants/icons';
import EventPaperworkModal from '../../../components/events/EventPaperworkModal';
import CallModal from '../../../components/events/CallModal';
import ExhibitorsModal from '../../../components/events/ExhibitorsModal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AboutEventView = ({navigation}) => {
  const [showEventPaperworkModal, setShowEventPaperworkModal] =
    React.useState(false);
  const [showCallModal, setShowCallModal] = React.useState(false);
  const [showExhibitorsModal, setShowExhibitorsModal] = React.useState(false);

  const handleRegister = () => {
    navigation.navigate('RegisterTeamScreen');
  };

  const handleEventPaperworkModal = () => {
    setShowEventPaperworkModal(true);
  };

  const handleCallModal = () => {
    setShowCallModal(true);
  };

  const handleExhibitorsModal = () => {
    setShowExhibitorsModal(true);
  };

  return (
    <>
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
              The Event at WEF showcases the Olympic sport of show jumping in
              the betiful lands of Wellington, Florida.
            </Text>
            {EventItems.map((item, index) => {
              return (
                <EventItem
                  key={index}
                  title={item.title}
                  statusText={item.statusText}
                  image={item.image}
                  onPress={() => {
                    if (item?.route) {
                      navigation.navigate(item.route);
                    }
                  }}
                />
              );
            })}
            <EventAboutPane
              title="Palm Beach International Equestria..."
              role="Event Organizer"
              image={EventLogo1Image}
            />
            <StatisticPane onPress={handleExhibitorsModal} />
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
              <TouchableOpacity
                onPress={() => navigation.navigate('AboutScreen')}>
                <Text style={styles.ShowMoreFont}>{'Show more >'}</Text>
              </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => navigation.navigate('SponsorsScreen')}>
                <Text style={styles.ShowMoreFont}>{'Show more >'}</Text>
              </TouchableOpacity>
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
                    onMorePress={() => navigation.navigate('FeesScreen')}
                  />
                );
              })}
            </View>
            <Divider style={styles.Divider} />
            <View>
              <Text style={styles.AboutTextFont}>Staff</Text>
              {StaffsData?.map((item, index) => {
                return (
                  <StaffItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    onPress={() => navigation.navigate('StaffScreen')}
                  />
                );
              })}
            </View>
            <Divider style={styles.Divider} />
            <View>
              <Text style={styles.AboutTextFont}>Policies</Text>
              {PoliciesData.map((item, index) => {
                return (
                  <PolicyItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                    onMorePress={() => navigation.navigate('PoliciesScreen')}
                  />
                );
              })}
            </View>
            <Divider style={styles.Divider} />
            <View>
              <Text style={styles.AboutTextFont}>Paperwork</Text>
              {PaperworksData.map((item, index) => {
                return (
                  <PaperworkItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    content={item.content}
                    onPress={handleEventPaperworkModal}
                  />
                );
              })}
            </View>
            <Divider style={styles.Divider} />
            <View>
              <Text style={styles.AboutTextFont}>Point of Contact</Text>
              <View style={styles.ContactItemView}>
                <Image source={UserIcon} style={styles.ContactIcon} />
                <Text style={styles.ContactTextFont}>Jennifer Tankel</Text>
              </View>
              <TouchableOpacity
                style={styles.ContactItemView}
                onPress={handleCallModal}>
                <Image source={PhoneIcon} style={styles.ContactIcon} />
                <Text
                  style={[
                    styles.ContactTextFont,
                    {textDecorationLine: 'underline'},
                  ]}>
                  +1 202 309 9809
                </Text>
              </TouchableOpacity>
            </View>
            <Divider style={styles.Divider} />
            <View style={styles.LocationView}>
              <Text style={styles.AboutTextFont}>Location</Text>
              <Image
                source={LocationMapImage}
                style={styles.LocationMapImage}
              />
              <Text style={styles.LocationTitleFont}>Directions</Text>
              <Text style={styles.LocationDescFont}>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alickajdk a...`}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('DirectionsScreen')}>
                <Text style={styles.ShowMoreFont}>{`Show more >`}</Text>
              </TouchableOpacity>
            </View>
            <Pressable
              style={[styles.Button, styles.ButtonApply]}
              onPress={handleRegister}>
              <Text style={[styles.TextStyle, styles.TextApply]}>Register</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <EventPaperworkModal
        modalVisible={showEventPaperworkModal}
        setModalVisible={setShowEventPaperworkModal}
      />
      <CallModal
        modalVisible={showCallModal}
        setModalVisible={setShowCallModal}
      />
      <ExhibitorsModal
        modalVisible={showExhibitorsModal}
        setModalVisible={setShowExhibitorsModal}
        navigation={navigation}
        activeTab={0}
      />
    </>
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
  ContactItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    gap: 12,
  },
  ContactIcon: {
    width: 24,
    height: 24,
  },
  ContactTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  LocationView: {
    flexDirection: 'column',
  },
  LocationMapImage: {
    width: '100%',
    height: 215,
    borderRadius: 8,
  },
  LocationTitleFont: {
    marginVertical: 10,
    fontFamily: FONT_BOLD,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  LocationDescFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    marginBottom: 10,
  },
});

export default AboutEventView;
