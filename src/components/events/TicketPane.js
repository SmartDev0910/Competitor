import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {
  ClockIcon,
  InfoIcon,
  InfoOutlinedIcon,
  MoneyBagIcon,
  NameTagWeakIcon,
} from '../../constants/icons';
import ViewTicketModal from './ViewTicketModal';
import AssignTicketModal from './AssignTicketModal';

const TicketPane = ({title, status, date, price, fullName}) => {
  const [showViewTicketModal, setShowViewTicketModal] = React.useState(false);
  const [showAssignTicketModal, setShowAssignTicketModal] =
    React.useState(false);

  const handleShowViewTicketModal = () => {
    setShowViewTicketModal(true);
  };

  const handleShowAssignTicketModal = () => {
    setShowAssignTicketModal(true);
  };

  if (status === 'Available')
    return (
      <>
        <View style={styles.Wrapper}>
          <View>
            <TouchableOpacity>
              <Text style={styles.TitleFont}>{title}</Text>
            </TouchableOpacity>
            <View style={styles.DetailView}>
              <Image source={ClockIcon} style={styles.DetailIcon} />
              <Text style={styles.DetailFont}>{date}</Text>
              <Image source={MoneyBagIcon} style={styles.DetailIcon} />
              <Text style={styles.DetailFont}>{price}</Text>
              <Image source={InfoOutlinedIcon} style={styles.DetailIcon} />
              <Text style={styles.StatusFont}>{status}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.AvailableActionView}
            onPress={handleShowAssignTicketModal}>
            <Text style={styles.AssignFont}>Assign</Text>
          </TouchableOpacity>
        </View>
        <AssignTicketModal
          modalVisible={showAssignTicketModal}
          setModalVisible={setShowAssignTicketModal}
        />
      </>
    );
  else if (status === 'Assigned')
    return (
      <>
        <View style={styles.Wrapper}>
          <View>
            <TouchableOpacity onPress={handleShowViewTicketModal}>
              <Text style={styles.TitleFont}>{title}</Text>
            </TouchableOpacity>
            <View style={styles.DetailView}>
              <Image source={ClockIcon} style={styles.DetailIcon} />
              <Text style={styles.DetailFont}>{date}</Text>
              <Image source={MoneyBagIcon} style={styles.DetailIcon} />
              <Text style={styles.DetailFont}>{price}</Text>
              <Image source={InfoIcon} style={styles.DetailIcon} />
              <Text style={styles.DetailFont}>{status}</Text>
            </View>
          </View>
          <View style={styles.ActionView}>
            <Image source={NameTagWeakIcon} style={styles.NameTagWeakIcon} />
            <Text style={styles.FullNameFont}>{fullName}</Text>
          </View>
        </View>
        <ViewTicketModal
          modalVisible={showViewTicketModal}
          setModalVisible={setShowViewTicketModal}
          title={title}
        />
      </>
    );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    padding: 8,
    flexDirection: 'column',
    marginVertical: 5,
    height: 136,
    justifyContent: 'space-between',
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
  },
  DetailView: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  DetailIcon: {
    width: 14,
    height: 14,
  },
  DetailFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_COMMENT,
  },
  StatusFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_PINK,
  },
  ActionView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    height: 55,
  },
  AvailableActionView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 55,
    backgroundColor: COLOR_PINK,
  },
  AssignFont: {
    color: COLOR_WHITE,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  FullNameFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  NameTagWeakIcon: {
    width: 24,
    height: 24,
    left: 16,
    top: 14,
    position: 'absolute',
  },
});

export default TicketPane;
