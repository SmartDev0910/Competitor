import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../constants/colors';
import Events from '../../constants/home/events';
import EventPane from '../../components/home/EventPane';

function ItemsListFragment() {
  return (
    <ScrollView style={styles.ScrollWrapper}>
      <View style={styles.Wrapper}>
        {Events.map((item, index) => {
          return (
            <EventPane
              key={index}
              title={item.title}
              image={item.image}
              date={item.date}
              location={item.location}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollWrapper: {
    backgroundColor: COLOR_WHITE,
  },
  Wrapper: {
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
    marginHorizontal: 24,
    marginBottom: 40,
    marginTop: 10,
  },
});

export default ItemsListFragment;
