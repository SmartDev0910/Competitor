import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_SEARCH_TEXT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {InfoIcon} from '../../constants/icons';
import AmountText from './AmountText';
import FeesInfoModal from './FeesInfoModal';

const FeesPaneItem = ({
  title,
  available,
  price,
  amount,
  rate,
  info,
  onMorePress,
}) => {
  const [amountText, setAmountText] = React.useState('');
  const [showFeesInfoModal, setShowFeesInfoModal] = React.useState(false);

  const onChangeAmountText = text => {
    setAmountText(text);
  };

  const handleMore = () => {
    setShowFeesInfoModal(true);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <View>
          <View>
            <Text style={styles.TitleFont}>{title}</Text>
          </View>
          <View style={styles.DetailView}>
            <View style={styles.DetailRowView}>
              <Text style={styles.ItemTitleFont}>Available</Text>
              <Text style={styles.ItemValueFont}>
                {available + ' remaining'}
              </Text>
            </View>
            <View style={styles.DetailRowView}>
              <Text style={styles.ItemTitleFont}>Price</Text>
              <Text style={styles.ItemValueFont}>{'$' + price}</Text>
            </View>
            <View style={styles.DetailRowView}>
              <Text style={styles.ItemTitleFont}>Rate</Text>
              <Text style={styles.ItemValueFont}>{rate}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.ActionView, amount ? {} : styles.AmountTextView]}>
          {amount ? (
            <Text style={styles.AmountFont}>{amount}</Text>
          ) : (
            <AmountText
              style={styles.AmountText}
              value={amountText}
              placeholder="Enter amount..."
              onChangeText={onChangeAmountText}
            />
          )}
        </View>
        <TouchableOpacity style={styles.HelpRowView} onPress={handleMore}>
          <Image source={InfoIcon} style={styles.HelpIcon} />
          <Text style={styles.HelpTextFont}>{info}</Text>
        </TouchableOpacity>
      </View>
      <FeesInfoModal
        modalVisible={showFeesInfoModal}
        setModalVisible={setShowFeesInfoModal}
        title={title}
        available={available}
        price={price}
        rate={rate}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
    marginBottom: 10,
  },
  DetailView: {
    flexDirection: 'column',
  },
  DetailIcon: {
    width: 14,
    height: 14,
  },
  ActionView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 55,
    marginTop: 10,
    backgroundColor: COLOR_SEARCH_TEXT,
  },
  AmountTextView: {
    backgroundColor: COLOR_WHITE,
    width: '100%',
  },
  AmountFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  DetailRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 25,
  },
  ItemValueFont: {
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
  AmountText: {
    width: '100%',
    height: 55,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default FeesPaneItem;
