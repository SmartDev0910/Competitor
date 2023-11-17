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
import CameraRollItem from './CameraRollItem';
import {CameraRollImage} from '../../constants/images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CameraRollModal = ({modalVisible, setModalVisible}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Camera roll</Text>
          <View style={styles.ModalContentView}>
            <View style={styles.ImagesRowView}>
              <CameraRollItem
                image={CameraRollImage}
                selected={selectedIndex === 1}
                style={styles.CameraRollItem}
                onPress={() => setSelectedIndex(1)}
              />
              <CameraRollItem
                image={CameraRollImage}
                selected={selectedIndex === 2}
                style={styles.CameraRollItem}
                onPress={() => setSelectedIndex(2)}
              />
              <CameraRollItem
                image={CameraRollImage}
                selected={selectedIndex === 3}
                style={styles.CameraRollItem}
                onPress={() => setSelectedIndex(3)}
              />
            </View>
            <View style={styles.ImagesRowView}>
              <CameraRollItem
                image={CameraRollImage}
                selected={selectedIndex === 4}
                style={styles.CameraRollItem}
                onPress={() => setSelectedIndex(4)}
              />
              <CameraRollItem
                image={CameraRollImage}
                selected={selectedIndex === 5}
                style={styles.CameraRollItem}
                onPress={() => setSelectedIndex(5)}
              />
              <CameraRollItem
                image={CameraRollImage}
                selected={selectedIndex === 6}
                style={styles.CameraRollItem}
                onPress={() => setSelectedIndex(6)}
              />
            </View>
            <View style={styles.ImagesRowView}>
              <CameraRollItem
                image={CameraRollImage}
                selected={selectedIndex === 7}
                style={styles.CameraRollItem}
                onPress={() => setSelectedIndex(7)}
              />
              <CameraRollItem
                image={CameraRollImage}
                selected={selectedIndex === 8}
                style={styles.CameraRollItem}
                onPress={() => setSelectedIndex(8)}
              />
              <CameraRollItem
                image={CameraRollImage}
                selected={selectedIndex === 9}
                style={styles.CameraRollItem}
                onPress={() => setSelectedIndex(9)}
              />
            </View>
          </View>

          <View style={styles.BottomButton}>
            <Pressable style={[styles.Button, styles.ButtonApply]}>
              <Text style={[styles.TextStyle, styles.TextApply]}>Save</Text>
            </Pressable>
            <Pressable
              style={[styles.Button, styles.ButtonCancel]}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.TextStyle, styles.TextCancel]}>Cancel</Text>
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
  ModalTitleFont: {
    marginBottom: 15,
    fontFamily: FONT_REGULAR,
    fontSize: 25,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
    marginHorizontal: 24,
    textAlign: 'center',
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
  ImagesRowView: {
    flexDirection: 'row',
  },
  CameraRollItem: {
    flex: 1,
  },
});

export default CameraRollModal;
