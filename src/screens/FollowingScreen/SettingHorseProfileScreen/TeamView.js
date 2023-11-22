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
  COLOR_BLACK,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../../constants/fonts';
import AuthorizeItem from '../../../components/following/AuthorizeItem';
import AuthorizedMe from '../../../constants/following/authorizedMe';
import {LaurelWreathIcon, PlusOutlinedIcon} from '../../../constants/icons';
import AuthorizeHelpModal from '../../../components/following/AuthorizeHelpModal';
import AddTeamMemberModal from '../../../components/following/AddTeamMemberModal';
import AuthorizeMeHelpModal from '../../../components/following/AuthorizeMeHelpModal';
import TeamMemberModal from '../../../components/following/TeamMemberModal';
import GovermentRecordsModal from '../../../components/following/GovermentRecordsModal';

const TeamView = ({navigation}) => {
  const [showAuthorizeHelpModal, setShowAuthorizeHelpModal] =
    React.useState(false);
  const [showAuthorizeMeHelpModal, setShowAuthorizeMeHelpModal] =
    React.useState(false);
  const [showAddTeamMemberModal, setShowAddTeamMemberModal] =
    React.useState(false);
  const [showGovermentRecordsModal, setShowGovermentRecordsModal] =
    React.useState(false);
  const [showTeamMemberModal, setShowTeamMemberModal] = React.useState(false);
  const [removedTeamModal, setRemovedTeamModal] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState(null);

  const handleAuthorizeHelpModal = () => {
    setShowAuthorizeHelpModal(true);
  };

  const handleAuthorizeMeHelpModal = () => {
    setShowAuthorizeMeHelpModal(true);
  };

  const handleAddTeamMemberModal = () => {
    setShowAddTeamMemberModal(true);
  };

  const handleTeamMemberModal = item => {
    setSelectedMember(item);
    setRemovedTeamModal(false);
    setShowTeamMemberModal(true);
  };

  const handleRemoveTeamMemberModal = item => {
    setSelectedMember(item);
    setRemovedTeamModal(true);
    setShowTeamMemberModal(true);
  };

  const handleGovermentRecordsModal = () => {
    setShowGovermentRecordsModal(true);
  };

  return (
    <>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.Wrapper}>
          <View style={styles.TeamTitleView}>
            <Text style={styles.AuthorizeFont}>TEAM</Text>
            <TouchableOpacity
              onPress={handleGovermentRecordsModal}
              style={styles.LaurelWreathIconView}>
              <Image
                source={LaurelWreathIcon}
                style={styles.LaurelWreathIcon}
              />
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
                  removable={true}
                  onPress={() => handleTeamMemberModal(item)}
                  onRemovePress={() => handleRemoveTeamMemberModal(item)}
                />
              );
            })}
          </View>
          <TouchableOpacity
            style={styles.PlusIconView}
            onPress={() => handleAddTeamMemberModal()}>
            <Image source={PlusOutlinedIcon} style={styles.PlusOutlinedIcon} />
          </TouchableOpacity>
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
      <TeamMemberModal
        modalVisible={showTeamMemberModal}
        setModalVisible={setShowTeamMemberModal}
        member={selectedMember}
        removed={removedTeamModal}
      />
      <GovermentRecordsModal
        modalVisible={showGovermentRecordsModal}
        setModalVisible={setShowGovermentRecordsModal}
        value={'Current owner: Ben Smith'}
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
  TeamTitleView: {
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
  LaurelWreathIconView: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLOR_BLACK,
  },
  LaurelWreathIcon: {
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

export default TeamView;
