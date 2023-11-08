import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import FollowingPeople from '../../../constants/following/followingPeople';
import TeamItem from '../../../components/events/TeamItem';

const TeamView = ({navigation}) => {
  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>5 new updates</Text>
          <Text style={styles.HeadFont}>Refresh</Text>
        </View>
        {FollowingPeople.map((item, index) => {
          return (
            <TeamItem
              key={index}
              fullName={item.fullName}
              avatar={item.avatar}
              match={item.match}
              onPress={() => navigation.navigate('EventsScreen')}
            />
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 34,
  },
});

export default TeamView;
