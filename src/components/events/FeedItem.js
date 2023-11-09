import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_PINK_THIN,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';
import {FeedViewImage} from '../../constants/images';

const FeedItem = ({
  image,
  title,
  description,
  statusText,
  titleStatusText,
  onPress,
}) => {
  const [showFeedViewImage, setShowFeedViewImage] = React.useState(false);
  const handleView = () => {
    setShowFeedViewImage(!showFeedViewImage);
  };

  return (
    <View style={styles.View} onPress={onPress}>
      <View style={styles.TitleView}>
        <Image source={image} style={styles.Image} />
        <View style={styles.DetailView}>
          <View style={styles.TitleTextView}>
            <Text style={styles.TitleFont}>{title + ' '}</Text>
            <Text style={styles.TitleStatusText}>{titleStatusText}</Text>
          </View>
          <Text style={styles.StatusTextFont}>{statusText}</Text>
        </View>
      </View>
      <Text style={styles.DescriptionFont}>{description}</Text>
      <TouchableOpacity onPress={handleView}>
        <Text style={styles.MoreTextFont}>{'View >'}</Text>
      </TouchableOpacity>
      {showFeedViewImage ? (
        <Image source={FeedViewImage} style={styles.FeedViewImage} />
      ) : (
        ''
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flexDirection: 'column',
    backgroundColor: COLOR_WHITE,
    marginVertical: 10,
    paddingHorizontal: 24,
    paddingVertical: 22,
  },
  TitleView: {
    flexDirection: 'row',
  },
  Image: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginTop: 5,
  },
  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    flexWrap: 'wrap',
    marginBottom: 2,
  },
  DetailView: {
    flexDirection: 'column',
    marginLeft: 12,
    flex: 1,
  },
  TitleStatusText: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  StatusTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  DescriptionFont: {
    marginTop: 5,
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    lineHeight: 24,
  },
  MoreTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    marginTop: 10,
  },
  TitleTextView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  FeedViewImage: {
    width: '100%',
    height: 255,
    marginTop: 10,
  },
});

export default FeedItem;
