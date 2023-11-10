import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';
import {FullScreenIcon, InfoIcon, QuillPenIcon} from '../../constants/icons';
import SignViewAnnexModal from './SignViewAnnexModal';

const SignPane = ({
  title,
  image,
  description,
  viewDocument,
  viewAnnex,
  signed,
  info,
}) => {
  const [showAnnexModal, setShowAnnexModal] = React.useState(false);

  const handleAnnexModal = () => {
    setShowAnnexModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.TitleView}>
          <Image source={image} style={styles.TitleImage} />
          <Text style={styles.TitleFont}>{title}</Text>
        </View>
        <View style={styles.DescriptionView}>
          <Text style={styles.DescriptionFont}>{description}</Text>
        </View>
        {viewDocument ? (
          <TouchableOpacity style={styles.ActionView}>
            <Image source={FullScreenIcon} style={styles.FullScreenIcon} />
            <Text style={styles.ActionTextFont}>View Document</Text>
          </TouchableOpacity>
        ) : (
          ''
        )}
        {viewAnnex ? (
          <TouchableOpacity
            style={styles.ActionView}
            onPress={handleAnnexModal}>
            <Image source={FullScreenIcon} style={styles.FullScreenIcon} />
            <Text style={styles.ActionTextFont}>View Annex</Text>
          </TouchableOpacity>
        ) : (
          ''
        )}
        {signed ? (
          ''
        ) : (
          <TouchableOpacity style={styles.ActionView}>
            <Image source={QuillPenIcon} style={styles.FullScreenIcon} />
            <Text style={styles.ActionTextFont}>Sign</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.HelpRowView}>
          <Image source={InfoIcon} style={styles.HelpIcon} />
          <Text style={styles.HelpTextFont}>{info}</Text>
        </TouchableOpacity>
      </View>
      <SignViewAnnexModal
        modalVisible={showAnnexModal}
        setModalVisible={setShowAnnexModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    flexDirection: 'column',
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginVertical: 8,
  },
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  TitleImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 25,
  },
  DescriptionView: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  DescriptionFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 25,
  },
  HelpRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  HelpIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  HelpTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_BUTTON_DEFAULT,
  },
  FullScreenIcon: {
    width: 24,
    height: 24,
    left: 16,
    top: 14,
    position: 'absolute',
  },
  ActionTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  ActionView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    height: 55,
    marginVertical: 5,
  },
});

export default SignPane;
