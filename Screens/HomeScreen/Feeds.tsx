import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  PanResponder,
  FlatList,
} from 'react-native';
import {globalStyles, globalVars} from '../../styles';
import ProfilePic from './ProfilePic';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native';
import Carousel from '../HomeScreen/Carousel';


const {width: windowWidth, height: windowHeight} = Dimensions.get('window');


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
      <Carousel />
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
  // feedBottom: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 7,
  //   marginVertical: 7,
  // },
  // feedBottomActions: {
  //   flex: 0.4,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   top: -50,
  //   padding: 5,
  //   borderRadius: 25,
  //   backgroundColor: 'rgba(255, 255, 255, 0.2)',
  // },

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
