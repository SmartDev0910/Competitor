import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import Events from '../../constants/events/events';
import EventPane from '../../components/events/EventPane';
import ExhibitorsModal from '../../components/events/ExhibitorsModal';

const RegisteredView = ({navigation}) => {
  const [showExhibitorsModal, setShowExhibitorsModal] = React.useState(false);
  const handleShowExibitorsModal = () => {
    setShowExhibitorsModal(true);
  };

  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>4 upcoming events</Text>
          <Text style={styles.HeadFont}>Sort</Text>
        </View>
        {Events.map((item, index) => {
          return (
            <EventPane
              key={index}
              image={item.image}
              title={item.title}
              location={item.location}
              prize={item.prize}
              statusText={item.statusText}
              onPress={handleShowExibitorsModal}
            />
          );
        })}
      </View>
      <ExhibitorsModal
        modalVisible={showExhibitorsModal}
        setModalVisible={setShowExhibitorsModal}
        navigation={navigation}
        activeTab={0}
      />
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

export default RegisteredView;
