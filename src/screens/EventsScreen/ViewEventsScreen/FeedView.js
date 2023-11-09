import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT, COLOR_SEARCH_TEXT} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import FeedItem from '../../../components/events/FeedItem';
import Feeds from '../../../constants/events/feeds';
import SortFeedModal from '../../../components/events/SortFeedModal';

const FeedView = ({navigation}) => {
  const [showSortFeedModal, setShowSortFeedModal] = React.useState(false);
  const handleShowSentModal = () => {
    setShowSortFeedModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>23 new updates</Text>
          <Text style={styles.HeadFont} onPress={handleShowSentModal}>
            Sort
          </Text>
        </View>
        <ScrollView>
          {Feeds.map((item, index) => (
            <FeedItem
              key={index}
              image={item.image}
              title={item.title}
              titleStatusText={item.titleStatusText}
              statusText={item.statusText}
              description={item.description}
            />
          ))}
        </ScrollView>
      </View>
      <SortFeedModal
        modalVisible={showSortFeedModal}
        setModalVisible={setShowSortFeedModal}
        navigation={navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingTop: 12,
    backgroundColor: COLOR_SEARCH_TEXT,
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 34,
  },
});

export default FeedView;
