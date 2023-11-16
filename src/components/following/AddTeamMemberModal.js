import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
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
import TeamMembers from '../../constants/events/teamMembers';
import SelectableTeamMemberItem from '../events/SelectableTeamMemberItem';
import SearchText from './SearchText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddTeamMemberModal = ({modalVisible, setModalVisible}) => {
  const [selectedMemberItems, setSelectedMemberItems] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');

  const handleMemberItemPress = index => {
    if (selectedMemberItems.includes(index)) {
      setSelectedMemberItems(
        selectedMemberItems.filter(item => item !== index),
      );
    } else {
      setSelectedMemberItems([...selectedMemberItems, index]);
    }
  };

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Add team member</Text>
          <View style={styles.ModalContentView}>
            <SearchText
              placeholder={'Search team members'}
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />
            {TeamMembers.map((item, index) => {
              return (
                <SelectableTeamMemberItem
                  key={index}
                  fullName={item.fullName}
                  avatar={item.avatar}
                  status={item.status}
                  selected={selectedMemberItems.includes(index)}
                  onPress={() => handleMemberItemPress(index)}
                />
              );
            })}
          </View>

          <View style={styles.BottomButton}>
            <Pressable
              style={[
                styles.Button,
                selectedMemberItems.length
                  ? styles.ButtonApply
                  : styles.ButtonReadyApply,
              ]}>
              <Text
                style={[
                  styles.TextStyle,
                  selectedMemberItems.length
                    ? styles.TextApply
                    : styles.TextReadyApply,
                ]}>
                {'NEXT >'}
              </Text>
            </Pressable>
            <Pressable
              style={[styles.Button, styles.ButtonCancel]}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.TextStyle, styles.TextCancel]}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
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
  ScrollView: {
    paddingHorizontal: 24,
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

export default AddTeamMemberModal;
