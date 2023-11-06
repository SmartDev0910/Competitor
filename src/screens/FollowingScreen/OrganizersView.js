import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import Organizers from '../../constants/following/organizers';
import OrganizerItem from '../../components/following/OrganizerItem';

const OrganizersView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>Following 3 event organizers</Text>
        </View>
        {Organizers.map((item, index) => {
          return (
            <OrganizerItem
              key={index}
              title={item.title}
              image={item.image}
              statusText={item.statusText}
              onPress={() => navigation.navigate('OrganizerProfileScreen')}
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
  },
});

export default OrganizersView;
