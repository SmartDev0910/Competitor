import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import TeamMembers from '../../../constants/following/teamMembers';
import TeamMemberItem from '../../../components/following/TeamMemberItem';

const StaffView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>Staff</Text>
        </View>
        {TeamMembers.map((item, index) => {
          return (
            <TeamMemberItem
              key={index}
              fullName={item.fullName}
              avatar={item.avatar}
              status={item.status}
              onPress={() => navigation.navigate('ProfileScreen')}
            />
          );
        })}
      </View>
    </ScrollView>
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
    textTransform: 'uppercase',
  },
});

export default StaffView;
