import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import TouchableIconTextItem from '../../../components/following/TouchableIconTextItem';
import {
  EnvelopeWeakIcon,
  LockWeakIcon,
  LogoutWeakIcon,
  MagneticCardWeakIcon,
} from '../../../constants/icons';
import CardNumbers from '../../../constants/following/cardNumbers';
import PaymentCardItem from '../../../components/following/PaymentCardItem';
import LogoutModal from '../../../components/following/LogoutModal';

const AccountDetailView = ({navigation}) => {
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);
  const handleLogoutModal = () => {
    setShowLogoutModal(true);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.Wrapper}>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>Account details</Text>
            <TouchableIconTextItem
              icon={EnvelopeWeakIcon}
              text={'Account email'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => navigation.navigate('AccountEmailScreen')}
            />
            <TouchableIconTextItem
              icon={LockWeakIcon}
              text={'Password settings'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => navigation.navigate('ManagePasswordScreen')}
            />
          </View>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>payment DETAILS</Text>
            <TouchableIconTextItem
              icon={MagneticCardWeakIcon}
              text={'Add credit/debit card'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => navigation.navigate('AddCardScreen')}
            />
            {CardNumbers.map((item, index) => {
              return (
                <PaymentCardItem
                  key={index}
                  cardNumber={item.number}
                  defaulted={item.defaulted}
                />
              );
            })}
          </View>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>Privacy</Text>
            <TouchableIconTextItem
              icon={LockWeakIcon}
              text={'Privacy settings'}
              rightIconVisible={true}
              style={styles.TouchableIconTextItem}
              onPress={() => navigation.navigate('PrivacySettingScreen')}
            />
          </View>
          <View style={styles.PartView}>
            <Text style={styles.HeadFont}>logout</Text>
            <TouchableIconTextItem
              icon={LogoutWeakIcon}
              text={'Sign out'}
              rightIconVisible={false}
              style={styles.TouchableIconTextItem}
              onPress={() => handleLogoutModal()}
            />
          </View>
        </View>
      </ScrollView>
      <LogoutModal
        modalVisible={showLogoutModal}
        setModalVisible={setShowLogoutModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 34,
    letterSpacing: 0.16,
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 10,
  },
  PartView: {
    flexDirection: 'column',
  },
  TouchableIconTextItem: {
    color: COLOR_FONT_COMMENT,
  },
});

export default AccountDetailView;
