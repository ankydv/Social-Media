import React, {useState}from 'react'
import { StyleSheet, View, Text, Image, PanResponder } from 'react-native';
import { globalStyles, globalVars } from '../../styles';
import ProfilePic from './ProfilePic';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Feeds = ():JSX.Element => {
  return (
    <View style={styles.feedsContainer}>
        <Feed/>
        <Feed/>
    </View>
  )
}

export default Feeds;

const Feed = () => {
  return (
    <View style={styles.feedContainer}>
      <View style={styles.feedHeader}>
      <ProfilePic/>
      <Text style={[globalStyles.txt,{flex: 1, paddingLeft: 5, fontSize: 15,color: globalVars.colors.black}]}>ankit_yadav125</Text>
      <MaterialCommunityIcons name='dots-vertical' size={30} color={globalVars.colors.black} />
      </View>
      <View>
        {/* <Image source={{uri: 'https://plus.unsplash.com/premium_photo-1687186954188-76f7f4a3d829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}} style = {{width: '100%', aspectRatio: 1}} /> */}
        <ImageSwiper/>
      </View>
      <View style={styles.feedBottom}>
        <View style={styles.feedBottomActions}>
            <MaterialCommunityIcons name='heart-multiple-outline' size={30} color={globalVars.colors.danger}/>
            <Ionicons name='chatbubbles-outline' size={30}/>
            <FontAwesome name='send-o' size={30} />
        </View>
        <Ionicons name='bookmarks-outline' size={30} />
      </View>
      <View style={styles.feedFooter}>
      <StackedAvatars/>
      <View> 
      <Text style={styles.avatarTxt}> and 696969 others</Text>
      </View>
      </View>
      <View style={styles.footerDesc}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Feeling Happy Guys! 💛</Text>
      </View>
    </View>
  )
}




const StackedAvatars = () => {
  const img = 'https://images.unsplash.com/photo-1560238970-cc0ae073d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
  return (
    <View style={styles.container}>
      <Image source={{uri: img}} style={styles.avatar} />

      <Image source={{uri: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}} style={styles.avatar} />

      <Image source={{uri: 'https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}} style={styles.avatar} />
    </View>
  );
};

const ImageSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {uri:'https://images.unsplash.com/photo-1580205315085-dd6d20e14e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
    {uri: 'https://images.unsplash.com/photo-1583900985737-6d0495555783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlraW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
    {uri: 'https://images.unsplash.com/photo-1515161318750-781d6122e367?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpa2luaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
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
      gap:7,
  },
  feedHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
    marginVertical: 7,

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
  },
  feedFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 7,

  },
  avatarTxt: {
    color:globalVars.colors.black,
    fontSize: 17,
    fontWeight: '500'
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
    aspectRatio:1,
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

})


