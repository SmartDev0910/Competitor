import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import EligibilityEvents from '../../../constants/events/eligibility';
import EligibilityPane from '../../../components/events/EligibilityPane';
import StatusModal from '../../../components/events/StatusModal';

const EligibilityView = () => {
  const [showStatusModal, setShowStatusModal] = React.useState(false);
  const handleStatusModal = () => {
    setShowStatusModal(true);
  };

  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>5 issues found</Text>
          <Text style={styles.HeadFont}>Refresh</Text>
        </View>
        {EligibilityEvents.map((item, index) => {
          return (
            <EligibilityPane
              key={index}
              image={item.image}
              title={item.title}
              statusText={item.statusText}
              onPress={handleStatusModal}
            />
          );
        })}
      </View>
      <StatusModal
        modalVisible={showStatusModal}
        setModalVisible={setShowStatusModal}
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

export default EligibilityView;
