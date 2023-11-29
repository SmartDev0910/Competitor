import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
} from 'react-native';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_FONT_DEFAULT,
  COLOR_MODAL_OVERLAY,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import SelectableTeamMemberItem from '../events/SelectableTeamMemberItem';
import LineageHorsesData from '../../constants/following/lineageHorses';
import SearchText from '../following/SearchText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ShareDocumentModal = ({modalVisible, setModalVisible}) => {
  const [selectedShareItems, setSelectedHorseItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleShareItemPress = index => {
    if (selectedShareItems.includes(index)) {
      setSelectedHorseItems(selectedShareItems.filter(item => item !== index));
    } else {
      setSelectedHorseItems([...selectedShareItems, index]);
    }
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Share document</Text>
          <View style={styles.ModalContentView}>
            <SearchText
              placeholder={'Sam'}
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />
            {LineageHorsesData.map((item, index) => {
              return (
                <SelectableTeamMemberItem
                  key={index}
                  fullName={item.fullName}
                  avatar={item.avatar}
                  status={item.detail}
                  selected={selectedShareItems.includes(index)}
                  onPress={() => handleShareItemPress(index)}
                />
              );
            })}
          </View>

          <View style={styles.BottomButton}>
            <Pressable style={[styles.Button, styles.ButtonApply]}>
              <Text style={[styles.TextStyle, styles.TextApply]}>{'SEND'}</Text>
            </Pressable>
            <Pressable style={[styles.Button, styles.ButtonReadyApply]}>
              <Text style={[styles.TextStyle, styles.TextReadyApply]}>
                {'DOWNLOAD'}
              </Text>
            </Pressable>
            <Pressable
              style={[styles.Button, styles.ButtonCancel]}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.TextStyle, styles.TextCancel]}>CANCEL</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  OverlayStyle: {
    backgroundColor: COLOR_MODAL_OVERLAY,
    position: 'absolute',
    width: width,
    height: height,
  },
  ModalView: {
    marginTop: 106,
    width: width,
    height: height - 106,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  Button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
    marginTop: 20,
  },
  ButtonCancel: {
    backgroundColor: COLOR_BUTTON_CANCEL,
  },
  ButtonReadyApply: {
    borderWidth: 1,
    borderColor: COLOR_PINK,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextCancel: {
    color: COLOR_BUTTON_DEFAULT,
  },
  TextApply: {
    color: COLOR_WHITE,
  },
  TextReadyApply: {
    color: COLOR_PINK,
  },
  ModalTitleFont: {
    marginBottom: 15,
    fontFamily: FONT_REGULAR,
    fontSize: 25,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
    marginHorizontal: 24,
  },
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 30,
    width: width - 48,
  },
  ModalContentView: {
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
});

export default ShareDocumentModal;
