import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../constants/colors';
import NavModal from '../../components/nav/NavModal';
import {ModalContext} from '../../providers/ModalProvider';
import {useIsFocused} from '@react-navigation/native';

function NavScreen({navigation}) {
  const [showNavModal, setShowNavModal] = useContext(ModalContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setShowNavModal(true);
    }
  }, [isFocused]);

  return (
    <View style={styles.Wrapper}>
      <NavModal navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
    flex: 1,
  },
});

export default NavScreen;
