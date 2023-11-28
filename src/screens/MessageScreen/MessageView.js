import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import MessageItem from '../../components/message/MessageItem';
import MessagesData from '../../constants/message/messages';

const MessageView = ({navigation, visibleAction}) => {
  const handlePress = () => {
    navigation.navigate('MessageDetailScreen');
  };

  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        {MessagesData.map((item, index) => {
          return (
            <MessageItem
              key={index}
              from={item.from}
              avatar={item.avatar}
              content={item.content}
              time={item.time}
              visibleAction={visibleAction}
              onPress={handlePress}
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
  },
});

export default MessageView;
