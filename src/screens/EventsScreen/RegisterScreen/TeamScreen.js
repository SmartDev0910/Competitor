import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Appbar from './Appbar';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../../constants/fonts';
import {PoliceBadgeIcon} from '../../../constants/icons';
import TeamMemberItem from '../../../components/events/TeamMemberItem';
import TeamMembers from '../../../constants/events/teamMembers';
import TeamHelpModal from '../../../components/events/TeamHelpModal';

const TeamScreen = ({navigation}) => {
  const [showHelpModal, setShowHelpModal] = React.useState(false);

  const handleStart = () => {
    navigation.navigate('RegisterRidersScreen');
  };

  const handleHelpModal = () => {
    setShowHelpModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <Appbar
          title="Team"
          navigation={navigation}
          visibleHelp={true}
          onInfoPress={handleHelpModal}
        />
        <ScrollView>
          <View style={styles.ContentView}>
            <View style={styles.TitleRowView}>
              <Image source={PoliceBadgeIcon} style={styles.PoliceBadgeIcon} />
              <Text style={styles.TitleFont}>Before we start...</Text>
            </View>
            <View style={styles.TitleRowView}>
              <Text style={styles.DescFont}>
                Only the people and horses below can be included in your
                registration
              </Text>
            </View>
            <View style={styles.ContentTitleRowView}>
              <Text style={styles.ContentTitleFont}>Your team</Text>
              <Text
                style={styles.ContentEditFont}
                onPress={() => navigation.navigate('EditProfileScreen')}>
                {'Edit team >'}
              </Text>
            </View>
            {TeamMembers.map((item, index) => {
              return (
                <TeamMemberItem
                  key={index}
                  fullName={item.fullName}
                  avatar={item.avatar}
                  status={item.status}
                />
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.ActionButtonView}>
          <Pressable style={[styles.Button, styles.ButtonCancel]}>
            <Text style={[styles.TextStyle, styles.TextCancel]}>
              Save & Exit
            </Text>
          </Pressable>
          <Pressable
            style={[styles.Button, styles.ButtonApply]}
            onPress={handleStart}>
            <Text style={[styles.TextStyle, styles.TextApply]}>
              {'Start >'}
            </Text>
          </Pressable>
        </View>
      </View>
      <TeamHelpModal
        modalVisible={showHelpModal}
        setModalVisible={setShowHelpModal}
      />
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'column',
  },
  ContentView: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  Button: {
    borderRadius: 10,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 60) / 2,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
  },
  ButtonCancel: {
    backgroundColor: COLOR_WHITE,
    color: COLOR_FONT_COMMENT,
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
  TitleRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  PoliceBadgeIcon: {
    width: 24,
    height: 24,
  },
  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
  },
  DescFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    flexWrap: 'wrap',
    color: COLOR_FONT_DEFAULT,
  },
  ContentTitleRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  ContentTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
  },
  ContentEditFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_BUTTON_DEFAULT,
  },
  ActionButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: COLOR_EVENT_BORDER,
    width: width - 48,
    marginLeft: 24,
    paddingVertical: 12,
    backgroundColor: COLOR_WHITE,
  },
});

export default TeamScreen;
