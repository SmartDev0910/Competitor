import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import NotificationsData from '../../constants/notification/notifications';
import NotificationItem from '../../components/notification/NotificationItem';

const NotificationView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        {NotificationsData.map((item, index) => {
          return (
            <NotificationItem
              key={index}
              avatar={item.avatar}
              content={item.content}
              time={item.time}
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
    paddingHorizontal: 20,
    paddingTop: 12,
  },
});

export default NotificationView;
