import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../../constants/fonts';
import AuthorizeItem from '../../../components/following/AuthorizeItem';
import AuthorizedMe from '../../../constants/following/authorizedMe';
import {HelpIcon, PlusOutlinedIcon} from '../../../constants/icons';
import Divider from '../../../components/home/Divider';
import AuthorizeHelpModal from '../../../components/following/AuthorizeHelpModal';
import AddTeamMemberModal from '../../../components/following/AddTeamMemberModal';
import AuthorizeMeHelpModal from '../../../components/following/AuthorizeMeHelpModal';

const TeamSettingsView = ({navigation}) => {
  const [showAuthorizeHelpModal, setShowAuthorizeHelpModal] =
    React.useState(false);
  const [showAuthorizeMeHelpModal, setShowAuthorizeMeHelpModal] =
    React.useState(false);
  const [showAddTeamMemberModal, setShowAddTeamMemberModal] =
    React.useState(false);

  const handleAuthorizeHelpModal = () => {
    setShowAuthorizeHelpModal(true);
  };

  const handleAuthorizeMeHelpModal = () => {
    setShowAuthorizeMeHelpModal(true);
  };

  const handleAddTeamMemberModal = () => {
    setShowAddTeamMemberModal(true);
  };

  return (
    <>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.Wrapper}>
          <Text style={styles.SubTitleFont}>Team settings</Text>
          <View style={styles.AuthorizeTitleView}>
            <Text style={styles.AuthorizeFont}>AUTHORIZE</Text>
            <TouchableOpacity onPress={() => handleAuthorizeHelpModal()}>
              <Image source={HelpIcon} style={styles.HelpIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.AuthorizedWrapper}>
            {AuthorizedMe.map((item, index) => {
              return (
                <AuthorizeItem
                  key={index}
                  fullName={item.fullName}
                  avatar={item.avatar}
                  detail={item.detail}
                />
              );
            })}
          </View>
          <TouchableOpacity
            style={styles.PlusIconView}
            onPress={() => handleAddTeamMemberModal()}>
            <Image source={PlusOutlinedIcon} style={styles.PlusOutlinedIcon} />
          </TouchableOpacity>
          <Divider style={styles.Divider} />
          <View style={styles.AuthorizeTitleView}>
            <Text style={styles.AuthorizeFont}>AUTHORIZED ME</Text>
            <TouchableOpacity onPress={() => handleAuthorizeMeHelpModal()}>
              <Image source={HelpIcon} style={styles.HelpIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.AuthorizedWrapper}>
            {AuthorizedMe.map((item, index) => {
              return (
                <AuthorizeItem
                  key={index}
                  fullName={item.fullName}
                  avatar={item.avatar}
                  detail={item.detail}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <AuthorizeHelpModal
        modalVisible={showAuthorizeHelpModal}
        setModalVisible={setShowAuthorizeHelpModal}
      />
      <AuthorizeMeHelpModal
        modalVisible={showAuthorizeMeHelpModal}
        setModalVisible={setShowAuthorizeMeHelpModal}
      />
      <AddTeamMemberModal
        modalVisible={showAddTeamMemberModal}
        setModalVisible={setShowAddTeamMemberModal}
      />
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: COLOR_WHITE,
  },
  Wrapper: {
    flex: 1,
    marginBottom: 36,
  },
  AuthorizedWrapper: {
    flexDirection: 'column',
    width: '100%',
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
  SubTitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    paddingHorizontal: 24,
    marginTop: 12,
  },
  AuthorizeTitleView: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 17,
  },
  AuthorizeFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
    marginTop: 8,
  },
  HelpIcon: {
    width: 14,
    height: 14,
  },
  PlusOutlinedIcon: {
    width: 24,
    height: 24,
  },
  PlusIconView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 15,
  },
  Divider: {
    width: width - 48,
    height: 1,
    backgroundColor: COLOR_FONT_COMMENT,
    marginLeft: 24,
  },
});

export default TeamSettingsView;
