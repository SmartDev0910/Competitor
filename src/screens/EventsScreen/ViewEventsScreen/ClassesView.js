import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  COLOR_FONT_DEFAULT,
  COLOR_SEARCH_TEXT,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import ClassItem from '../../../components/events/ClassItem';
import Classes from '../../../constants/events/classes';
import ManageModal from '../../../components/events/ManageModal';
const ClassesView = ({navigation}) => {
  const [showManageModal, setShowManageModal] = React.useState(false);
  const handleManageButton = () => {
    setShowManageModal(true);
  };
  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>3 classes, $240</Text>
          <Text style={styles.HeadFont} onPress={handleManageButton}>
            Manage
          </Text>
        </View>
        {Classes.map((item, index) => {
          return (
            <ClassItem
              key={index}
              title={item.title}
              match={item.match}
              date={item.date}
              price={item.price}
            />
          );
        })}
      </View>
      <ManageModal
        modalVisible={showManageModal}
        setModalVisible={setShowManageModal}
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
    backgroundColor: COLOR_WHITE,
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

export default ClassesView;
