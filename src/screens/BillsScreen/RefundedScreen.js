import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';
import {
  ArrowLeftIcon,
  InfoIcon,
  LocationIcon,
  MagneticCardIcon,
  ShareRoundedIcon,
  TearOffCalendarIcon,
} from '../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_FONT_COMMENT,
  COLOR_SKY,
  COLOR_YELLOW,
} from '../../constants/colors';
import ImageButton from '../../components/home/ImageButton';
import {EventLogo4Image, WoodyWilsonImage} from '../../constants/images';
import BillsRegistrationsPane from '../../components/bills/BillsRegistrationsPane';
import BillsFeesPane from '../../components/bills/BillsFeesPane';
import BillsTicketsPane from '../../components/bills/BillsTicketsPane';
import BillsPaperworkPane from '../../components/bills/BillsPaperworkPane';
import BillsGrandTotalPane from '../../components/bills/BillsGrandTotalPane';
import Divider from '../../components/home/Divider';
import IconLabeledItem from '../../components/bills/IconLabeledItem';
import StatusHelpItem from '../../components/bills/StatusHelpItem';

const RefundedScreen = ({navigation}) => {
  const [registerationCollapsed, setRegisterationCollapsed] =
    React.useState(true);
  const [feesCollapsed, setFeesCollapsed] = React.useState(true);
  const [ticketsCollapsed, setTicketsCollapsed] = React.useState(true);
  const [paperworkCollapsed, setPaperworkCollapsed] = React.useState(true);
  const [grandTotalCollapsed, setGrandTotalCollapsed] = React.useState(true);

  const handleRegisterationCollapse = () => {
    setRegisterationCollapsed(!registerationCollapsed);
  };

  const handleFeesCollapse = () => {
    setFeesCollapsed(!feesCollapsed);
  };

  const handleTicketsCollapse = () => {
    setTicketsCollapsed(!ticketsCollapsed);
  };

  const handlePaperworkCollapse = () => {
    setPaperworkCollapsed(!paperworkCollapsed);
  };

  const handleGrandTotalCollapse = () => {
    setGrandTotalCollapsed(!grandTotalCollapsed);
  };

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.Appbar}>
          <View style={styles.AppbarTitleView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
            </TouchableOpacity>
            <Text style={styles.AppbarTextFont}>Receipt</Text>
          </View>
          <ImageButton
            source={ShareRoundedIcon}
            style={styles.TopButton}
            viewStyle={styles.TopButtonView}
          />
        </View>
        <ScrollView>
          <View style={styles.ContentView}>
            <View style={styles.PriceView}>
              <Text style={styles.PriceTextFont}>{`$5,685`}</Text>
              <Text style={styles.PriceCommentFont}>{`$1,175 refunded`}</Text>
            </View>
            <View style={styles.AvatarView}>
              <Image source={WoodyWilsonImage} style={styles.AvatarImage} />
              <View style={styles.AvatarInfoView}>
                <Text style={styles.AvatarTextFont}>{`From`}</Text>
                <Text style={styles.AvatarContentFont}>{`Elias Wilson`}</Text>
              </View>
            </View>
            <View style={styles.AvatarView}>
              <Image source={EventLogo4Image} style={styles.AvatarImage} />
              <View style={styles.AvatarInfoView}>
                <Text style={styles.AvatarTextFont}>{`Event`}</Text>
                <Text
                  style={
                    styles.AvatarContentFont
                  }>{`MARS Hosts Boy Martin`}</Text>
              </View>
            </View>
            <View style={styles.IconRowView}>
              <View style={styles.IconView}>
                <Image source={TearOffCalendarIcon} style={styles.Icon} />
              </View>
              <Text style={styles.IconInfoTextFont}>
                {`November 29th, 2021`}
              </Text>
            </View>
            <View style={styles.IconRowView}>
              <View style={styles.IconView}>
                <Image source={LocationIcon} style={styles.Icon} />
              </View>
              <Text style={styles.IconInfoTextFont}>
                {`158 Yellow Hill Rd, Middleburg, VA 20117`}
              </Text>
            </View>
            <Divider style={styles.Divider} />
            <BillsRegistrationsPane
              collapsed={registerationCollapsed}
              onCollapse={handleRegisterationCollapse}
            />
            <BillsFeesPane
              collapsed={feesCollapsed}
              onCollapse={handleFeesCollapse}
            />
            <BillsTicketsPane
              collapsed={ticketsCollapsed}
              onCollapse={handleTicketsCollapse}
            />
            <BillsPaperworkPane
              collapsed={paperworkCollapsed}
              onCollapse={handlePaperworkCollapse}
            />
            <BillsGrandTotalPane
              collapsed={grandTotalCollapsed}
              onCollapse={handleGrandTotalCollapse}
            />
            <View style={styles.PaymentDetailView}>
              <Text style={styles.PaymentDetailTitleFont}>Refund details</Text>
              <IconLabeledItem
                image={MagneticCardIcon}
                title={'Refunded to: XXXX-XXXX-XXXX-1029'}
              />
              <IconLabeledItem
                image={TearOffCalendarIcon}
                title={'Refund date: Dec 28, 2022'}
              />
              <StatusHelpItem
                image={InfoIcon}
                title="Organizer comments:"
                content="Hi Elias - sorry to hear about your dad. I refund what I could but we do have policies for a reason because we have fixed costs we have to cover. So I hope this amount will be acceptable. I see you are registered to compete again next week, hopefully everything with your dad is fine and you are able to attend. See you then!"
              />
            </View>
          </View>
        </ScrollView>

        <View style={styles.BottomButton}>
          <Pressable style={[styles.Button, styles.ButtonApply]}>
            <Text style={[styles.TextStyle, styles.TextApply]}>download</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  Appbar: {
    height: 36,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AppbarButton: {
    width: 22,
    height: 22,
  },
  AppbarTextFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_DEFAULT,
    fontSize: 24,
    marginLeft: 7,
  },
  ContentView: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    flexDirection: 'column',
    marginBottom: 60,
  },
  Button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextApply: {
    color: COLOR_WHITE,
  },
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 10,
    width: width - 48,
  },
  TopButton: {
    width: 24,
    height: 24,
  },
  TopButtonView: {
    borderWidth: 1,
    borderColor: COLOR_FONT_COMMENT,
    borderRadius: 45,
    padding: 3,
  },
  AppbarTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PriceView: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 56,
    marginVertical: 5,
  },
  PriceTextFont: {
    fontFamily: FONT_BOLD,
    fontSize: 20,
    color: COLOR_SKY,
    lineHeight: 24,
  },
  PriceCommentFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_YELLOW,
  },
  AvatarView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    gap: 12,
    marginVertical: 5,
  },
  AvatarImage: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  AvatarInfoView: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  AvatarTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_COMMENT,
  },
  AvatarContentFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
  },
  IconRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 56,
    marginVertical: 5,
  },
  IconView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
  },
  Icon: {
    width: 24,
    height: 24,
  },
  IconInfoTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
    flexWrap: 'wrap',
    width: width - 140,
  },
  Divider: {
    backgroundColor: COLOR_FONT_DEFAULT,
    height: 1,
    marginVertical: 5,
  },
  PaymentDetailView: {
    flexDirection: 'column',
    marginTop: 18,
  },
  PaymentDetailTitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    lineHeight: 34,
    color: COLOR_FONT_DEFAULT,
    marginBottom: 5,
  },
});

export default RefundedScreen;
