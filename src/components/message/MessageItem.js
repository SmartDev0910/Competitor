import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {COLOR_FONT_DEFAULT, COLOR_WHITE} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {MoreIcon} from '../../constants/icons';
import ActionModal from './ActionModal';

const MessageItem = ({avatar, from, content, time, visibleAction, onPress}) => {
  const [showActionModal, setShowActionModal] = React.useState(false);

  const handlePress = () => {
    setShowActionModal(true);
  };

  return (
    <>
      <Pressable style={styles.View} onPress={onPress}>
        <Image source={avatar} style={styles.Avatar} />
        <View style={styles.DetailView}>
          <Text style={[styles.ContentTextFont, {fontSize: 14}]}>{from}</Text>
          <Text style={styles.ContentTextFont}>{content}</Text>
        </View>
        <View style={styles.RightView}>
          <Text style={styles.TimeTextFont}>{time}</Text>
          {visibleAction ? (
            <TouchableOpacity onPress={handlePress}>
              <Image source={MoreIcon} style={styles.MoreIcon} />
            </TouchableOpacity>
          ) : (
            ''
          )}
        </View>
      </Pressable>
      <ActionModal
        modalVisible={showActionModal}
        setModalVisible={setShowActionModal}
      />
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    alignItems: 'center',
    paddingHorizontal: 12,
    marginVertical: 5,
    height: 56,
    gap: 12,
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  ContentTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    flexWrap: 'wrap',
    color: COLOR_FONT_DEFAULT,
  },
  DetailView: {
    flexDirection: 'column',
    width: width - 176,
    gap: 5,
  },
  MoreIcon: {
    width: 24,
    height: 24,
  },
  RightView: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: 60,
  },
  TimeTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_DEFAULT,
  },
});

export default MessageItem;
