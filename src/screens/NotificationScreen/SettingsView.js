import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import SettingItem from '../../components/notification/SettingItem';
import SettingsData from '../../constants/notification/settings';

const SettingsView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        {SettingsData.map((item, index) => {
          return (
            <SettingItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              active={item.active}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
});

export default SettingsView;
