import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, PanResponder} from 'react-native';
import {globalStyles, globalVars} from '../../styles';
import ProfilePic from './ProfilePic';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {
//   Canvas,
//   Fill,
//   BackdropBlur,
//   ColorMatrix,
//   useImage,
// } from "@shopify/react-native-skia";

const Feeds = (): JSX.Element => {
  return (
    <View style={styles.feedsContainer}>
      <Feed />
      <Feed />
    </View>
  );
};

export default Feeds;

const Feed = () => {
  return (
    <View style={styles.feedContainer}>
      <View style={styles.feedHeader}>
        <View style={styles.feedUploader}>
          <ProfilePic
            width={60}
            height={60}
            img="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJpZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </View>

        <Text
          style={[
            globalStyles.txt,
            {
              flex: 1,
              paddingLeft: 5,
              fontSize: 15,
              color: globalVars.colors.black,
              bottom: -10,
              fontWeight: '500',
            },
          ]}>
          ankit_yadav125
        </Text>

        <Text
          style={{
            right: 8,
            fontSize: 15,
            color: globalVars.colors.danger,
            bottom: -10,
            fontWeight: '500',
          }}>
          Follow
        </Text>

        <MaterialCommunityIcons
          name="dots-vertical"
          size={30}
          color={globalVars.colors.black}
          style={{
            fontSize: 25,
            bottom: -10,
          }}
        />
      </View>
      <View>
        {/* <Image source={{uri: 'https://plus.unsplash.com/premium_photo-1687186954188-76f7f4a3d829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}} style = {{width: '100%', aspectRatio: 1}} /> */}
        <ImageSwiper />
      </View>
      <View style={styles.feedBottom}>
      {/* <BackdropBlur blur={4} clip={{ x: 0, y: 128, width: 256, height: 128 }}>
        <Fill color="rgba(0, 0, 0, 0.2)" />
       */}
          <View style={styles.feedBottomActions}>
            <MaterialCommunityIcons
              name="heart-multiple-outline"
              size={30}
              color={globalVars.colors.danger}
            />
            <Ionicons name="chatbubbles-outline" size={30} />
            <FontAwesome name="send-o" size={30} />
          </View>
          {/* </BackdropBlur> */}
      
        <Ionicons name="bookmarks-outline" size={30} />
      </View>
      <View style={styles.feedFooter}>
        <StackedAvatars />
        <View>
          <Text style={styles.avatarTxt}> and 696969 others</Text>
        </View>
      </View>
      <View style={styles.footerDesc}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Feeling Happy Guys! 💛
        </Text>
      </View>
    </View>
  );
};

const StackedAvatars = () => {
  const img =
    'https://images.unsplash.com/photo-1560238970-cc0ae073d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
  return (
    <View style={styles.container}>
      <Image source={{uri: img}} style={styles.avatar} />

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={styles.avatar}
      />

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        }}
        style={styles.avatar}
      />
    </View>
  );
};

const ImageSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      uri: 'https://images.unsplash.com/photo-1694445083738-1e1f6104e9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      uri: 'https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      uri: 'https://plus.unsplash.com/premium_photo-1674326713056-e458f42535fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // Disable vertical gesture by only allowing horizontal gesture
      return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
    },
    onPanResponderMove: (evt, gestureState) => {
      // Swipe left
      if (gestureState.dx < -50) {
        const nextIndex = currentIndex + 1;
        if (nextIndex < images.length) {
          setCurrentIndex(nextIndex);
        }
      }
      // Swipe right
      else if (gestureState.dx > 50) {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          setCurrentIndex(prevIndex);
        }
      }
    },
    onPanResponderRelease: () => {},
  });

  return (
    <View {...panResponder.panHandlers}>
      <Image source={images[currentIndex]} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    width: '100%',
    // aspectRatio: 1/1,
    backgroundColor: globalVars.colors.white,
  },
  feedsContainer: {
    // flex: 1,
    alignItems: 'center',
    gap: 7,
  },
  feedHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
    marginTop: -6,
  },
  feedBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    marginVertical: 7,
  },
  feedBottomActions: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -50,
    padding: 5,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },

  feedFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 7,
  },
  avatarTxt: {
    color: globalVars.colors.black,
    fontSize: 17,
    fontWeight: '500',
  },
  footerDesc: {
    marginBottom: 10,
    paddingHorizontal: 7,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  container: {
    flexDirection: 'row-reverse',
  },
  avatar: {
    width: 25,
    aspectRatio: 1,
    borderRadius: 25, // To make it rounded
    marginRight: -10, // Adjust spacing between avatars
    borderWidth: 0.5, // Optional: Add a border around each avatar
    borderColor: globalVars.colors.black,
  },
  imageSwiper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedUploader: {
    borderWidth: 3,
    borderRadius: 35,
    borderColor: 'pink',
    bottom: -15,
    zIndex: 999,
  },
});
