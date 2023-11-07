import React, {useState, useContext} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {COLOR_FONT_DEFAULT, COLOR_MODAL_OVERLAY} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import ProfilePane from './ProfilePane';
import {ProfileEditImage} from '../../constants/images';
import Navs from '../../constants/nav/navs';
import NavItem from './NavItem';
import {ModalContext} from '../../providers/ModalProvider';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const NavModal = ({modalVisible, setModalVisible, navigation}) => {
  const [showNavModal, setShowNavModal] = useContext(ModalContext);

  const handlePress = route => {
    navigation.navigate(route);
    setShowNavModal(false);
  };

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={showNavModal}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <ProfilePane
            fullName="David Silbia"
            statusText="Competitor account"
            image={ProfileEditImage}
          />
          <View style={styles.SpaceView} />
          <View style={styles.ModalContentView}>
            {Navs.map((item, index) => {
              return (
                <NavItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  onPress={() => handlePress(item.route)}
                />
              );
            })}
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
    marginTop: 50,
    width: width,
    height: height - 50,
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
  ModalTitleFont: {
    marginBottom: 15,
    fontFamily: FONT_REGULAR,
    fontSize: 25,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
    marginHorizontal: 24,
  },
  ModalContentView: {
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  SpaceView: {
    height: 20,
  },
});

export default NavModal;
