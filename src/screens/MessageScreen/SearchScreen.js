import React, {useState} from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import ImageButton from '../../components/home/ImageButton';
import Divider from '../../components/home/Divider';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_FONT_DIVIDER,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';
import {ArrowLeftImage} from '../../constants/images';
import {RecentSearch} from '../../constants/home/searches';
import {CancelWeakIcon, SearchWeakIcon} from '../../constants/icons';
import SearchText from '../../components/home/SearchText';
import MessageView from './MessageView';

function SearchScreen({navigation}) {
  const [searchText, setSearchText] = useState('');

  const onChangeText = text => {
    setSearchText(text);
  };

  const clearInput = () => {
    setSearchText('');
  };

  const RecentSearchView = (
    <View style={styles.ContentView}>
      <View style={styles.RecentRow}>
        <Text style={styles.RecentSearchFont}>Recent searches</Text>
        <Text style={styles.ClearAllFont}>Clear all</Text>
      </View>
      {RecentSearch?.map((item, index) => {
        return (
          <View style={styles.RecentResultRow} key={index}>
            <Text style={styles.RecentItemFont}>{item}</Text>
            <Image source={CancelWeakIcon} style={styles.CancelWeakImage} />
          </View>
        );
      })}
    </View>
  );

  const NotFoundView = (
    <View style={styles.ContentView}>
      <View style={styles.SearchedItemRow}>
        <Image source={SearchWeakIcon} style={styles.CancelWeakImage} />
        <Text
          style={
            styles.RecentItemFont
          }>{`No messages found for ‘${searchText}‘`}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <ImageButton
          source={ArrowLeftImage}
          style={styles.BackButton}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.SearchBarWrapper}>
          <SearchText
            style={styles.SearchText}
            value={searchText}
            onChangeText={onChangeText}
            clearInput={clearInput}
          />
        </View>
      </View>
      <Divider style={styles.Divider} />
      <ScrollView>
        {searchText === '' ? (
          RecentSearchView
        ) : searchText === 'Clinic' ? (
          <MessageView visibleAction={false} navigation={navigation} />
        ) : (
          NotFoundView
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
  Appbar: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  BackButton: {
    width: 22,
    height: 22,
  },
  SearchBarWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SearchText: {
    width: '95%',
    height: 50,
  },
  ContentView: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  RecentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  RecentSearchFont: {
    fontFamily: FONT_BOLD,
    color: COLOR_FONT_DEFAULT,
    fontSize: 16,
  },
  ClearAllFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_COMMENT,
    fontSize: 16,
  },
  RecentResultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  RecentItemFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_DEFAULT,
    fontSize: 14,
  },
  CancelWeakImage: {
    width: 18,
    height: 18,
  },
  SearchedResultView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
    alignItems: 'center',
  },
  SearchedItemRow: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  ArrowRightImage: {
    width: 4.2,
    height: 9,
  },
  SearchedResultBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  LoadmoreFont: {
    color: COLOR_PINK,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  Divider: {
    height: 1,
    backgroundColor: COLOR_FONT_DIVIDER,
    width: '100%',
    marginVertical: 20,
  },
});

export default SearchScreen;
