import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import SynchronizePane from '../../../components/following/SynchronizePane';
import EligibilityStatusData from '../../../constants/following/eligibilityStatus';
import SelectableEligibilityStatusItem from '../../../components/following/SelectableEligibilityStatusItem';
import Divider from '../../../components/home/Divider';
import SuspensionsData from '../../../constants/following/suspensions';
import SelectableSuspensionItem from '../../../components/following/SelectableSuspensionItem';
import SyncCompetitionNumbersData from '../../../constants/following/syncCompetitionNumbers';
import SelectableCompetitionNumberItem from '../../../components/following/SelectableCompetitionNumberItem';
import {ModalContext} from '../../../providers/ModalProvider';

const SynchronizeView = ({navigation}) => {
  const [syncStatus, setSyncStatus] = useState(false);
  const [, , , , , , , , competitionNumberIndex, setCompetitionNumberIndex] =
    useContext(ModalContext);

  const handleSyncCompetitionNumberPress = index => {
    setCompetitionNumberIndex(index);
    navigation.navigate('SyncCompetitionNumberScreen');
  };

  const handleSyncPress = () => {
    setSyncStatus(true);
  };

  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>eligibility status</Text>
          {syncStatus ? (
            <>
              <View style={styles.SubTitleView}>
                <Text style={styles.SubTitleFont}>4 problems found</Text>
                <Text style={styles.SubTitleFont}>Refresh</Text>
              </View>
              {EligibilityStatusData.map((item, index) => {
                return (
                  <SelectableEligibilityStatusItem
                    key={index}
                    title={item.title}
                    image={item.image}
                    status={item.status}
                    expDate={item.expDate}
                    selected={item.selected}
                  />
                );
              })}
              <Divider style={styles.Divider} />
              {SuspensionsData.map((item, index) => {
                return (
                  <SelectableSuspensionItem
                    key={index}
                    title={item.title}
                    details={item.details}
                  />
                );
              })}
              <Divider style={styles.Divider} />
              {SyncCompetitionNumbersData.map((item, index) => {
                return (
                  <SelectableCompetitionNumberItem
                    key={index}
                    title={item.title}
                    image={item.image}
                    status={item.status}
                    details={item.details}
                    expDate={item.expDate}
                    selected={item.selected}
                    onPress={() => handleSyncCompetitionNumberPress(index)}
                  />
                );
              })}
            </>
          ) : (
            <>
              <SynchronizePane onSyncPress={handleSyncPress} />
              <Text style={styles.BottomFont}>
                Sync with USEF to view eligibility status
              </Text>
            </>
          )}
        </View>
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
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 34,
    letterSpacing: 0.16,
    textTransform: 'uppercase',
  },
  PartView: {
    flexDirection: 'column',
  },
  BottomFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 23,
    color: COLOR_FONT_DEFAULT,
  },
  Divider: {
    height: 1,
    backgroundColor: COLOR_EVENT_BORDER,
    marginVertical: 20,
  },
  SubTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  SubTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    textAlign: 'right',
    lineHeight: 23,
  },
});

export default SynchronizeView;
