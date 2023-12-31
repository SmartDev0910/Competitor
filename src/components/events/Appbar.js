import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT, COLOR_FONT_COMMENT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {ArrowLeftIcon, MessagingWeakIcon} from '../../constants/icons';
import ImageButton from '../home/ImageButton';
import MessageModal from './MessageModal';

const Appbar = ({navigation}) => {
  const [showMessageModal, setShowMessageModal] = React.useState(false);
  const handleShowMessageModal = () => {
    setShowMessageModal(true);
  };

  return (
    <>
      <View style={styles.Appbar}>
        <View style={styles.BackView}>
          <ImageButton
            source={ArrowLeftIcon}
            onPress={() => navigation.goBack()}
            style={styles.BackButton}
          />
          <Text style={styles.BackFont}>Back</Text>
        </View>
        <ImageButton
          source={MessagingWeakIcon}
          style={styles.TopButton}
          viewStyle={styles.TopButtonView}
          onPress={handleShowMessageModal}
        />
      </View>
      <MessageModal
        modalVisible={showMessageModal}
        setModalVisible={setShowMessageModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Appbar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 12,
  },
  BackView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BackButton: {
    width: 22,
    height: 22,
  },
  BackFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 20,
    color: COLOR_FONT_DEFAULT,
    marginLeft: 12,
  },
  TopButton: {
    width: 24,
    height: 24,
  },
  TopButtonView: {
    borderWidth: 1,
    borderColor: COLOR_FONT_COMMENT,
    borderRadius: 45,
    padding: 3,
  },
});

export default Appbar;
