import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import StatusHelpItem from '../../../components/following/StatusHelpItem';
import {LockIcon} from '../../../constants/icons';

const PrivateAccountView = () => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <StatusHelpItem
          image={LockIcon}
          title={'This account is private'}
          content={'David has chosen to keep his account private'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
});

export default PrivateAccountView;
