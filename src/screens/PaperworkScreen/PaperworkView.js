import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import PaperworkItem from '../../components/paperwork/PaperworkItem';
import PaperworksData from '../../constants/paperwork/paperworks';

const PaperworkView = ({navigation}) => {
  const handlePress = signed => {
    if (signed) navigation.navigate('PaperworkSignedScreen');
    else navigation.navigate('PaperworkSignScreen');
  };

  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        {PaperworksData.map((item, index) => {
          return (
            <PaperworkItem
              key={index}
              title={item.title}
              role={item.role}
              image={item.image}
              signed={item.signed}
              onPress={() => handlePress(item.signed)}
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
    height: '100%',
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
});

export default PaperworkView;
