import React, {useState, useEffect} from 'react';
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
import {BiotechIcon} from '../../constants/icons';
import AuthorizeItem from './AuthorizeItem';
import SelectItemsModal from './SelectItemsModal';
import TouchableIconTextItem from './TouchableIconTextItem';
import RelationHorsesData from '../../constants/following/relationHorses';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const RelatedHorsesModal = ({modalVisible, setModalVisible, horse}) => {
  const [selectItemsModalTitle, setSelectItemsModalTitle] = useState('');
  const [selectItemsModalData, setSelectItemsModalData] = useState([]);
  const [showSelectItemsModal, setShowSelectItemsModal] = useState(false);
  const [reopenParentModal, setReopenParentModal] = useState(false);

  const handleSelectItemsModal = (title, data) => {
    setModalVisible(false);
    setSelectItemsModalTitle(title);
    setSelectItemsModalData(data);
    setShowSelectItemsModal(true);
    setReopenParentModal(true); // set flag when opening the SelectItemsModal
  };

  useEffect(() => {
    if (!showSelectItemsModal && reopenParentModal) {
      setModalVisible(true);
      setReopenParentModal(false); // reset to default
    }
  }, [showSelectItemsModal, reopenParentModal]);

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.OverlayStyle} />
        <View style={styles.ModalView}>
          <Text style={styles.ModalTitleFont}>Related horse</Text>
          <View style={styles.ModalContentView}>
            <AuthorizeItem
              fullName={horse?.fullName}
              avatar={horse?.avatar}
              detail={horse?.detail}
            />
            <TouchableIconTextItem
              icon={BiotechIcon}
              text={horse?.detail}
              downIconVisible={true}
              onPress={() =>
                handleSelectItemsModal(
                  'Select relationship',
                  RelationHorsesData,
                )
              }
            />
          </View>

          <View style={styles.BottomButton}>
            <Pressable style={[styles.Button, styles.ButtonApply]}>
              <Text style={[styles.TextStyle, styles.TextApply]}>Save</Text>
            </Pressable>
            <Pressable
              style={[styles.Button, styles.ButtonCancel]}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.TextStyle, styles.TextCancel]}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <SelectItemsModal
        modalVisible={showSelectItemsModal}
        setModalVisible={setShowSelectItemsModal}
        title={selectItemsModalTitle}
        data={selectItemsModalData}
        govermenceIconVisible={false}
      />
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

export default RelatedHorsesModal;
