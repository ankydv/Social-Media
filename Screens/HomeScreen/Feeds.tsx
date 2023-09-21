import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, globalVars } from '../../styles';
import ProfilePic from './ProfilePic';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Feeds = ():JSX.Element => {
  return (
    <View style={styles.feedsContainer}>
        <Feed/>
        {/* <Feed/> */}
    </View>
  )
}

export default Feeds;

const Feed = () => {
  return (
    <View style={styles.feedContainer}>
      <View style={styles.feedHeader}>
      <ProfilePic/>
      <Text style={[globalStyles.txt,{flex: 1, paddingLeft: 5, fontSize: 20}]}>Ankit</Text>
      <MaterialCommunityIcons name='dots-vertical' size={30} color={globalVars.colors.danger} />
      </View>
      <View>
        <Image source={{uri: 'https://plus.unsplash.com/premium_photo-1687186954188-76f7f4a3d829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'}} style = {{width: '100%', aspectRatio: 1}} />
      </View>
      <View style={styles.feedBottom}>
        <View style={styles.feedBottomActions}>
            <MaterialCommunityIcons name='heart-multiple-outline' size={30}/>
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

    </View>
  )
}


const styles = StyleSheet.create({
    feedContainer: {
        width: '100%',
        // aspectRatio: 1/1,
        backgroundColor: globalVars.colors.white,
    },
    feedsContainer: {
        alignItems: 'center',
        
    },
    feedHeader: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 7,

    },
    feedBottom: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
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

    },
    avatarTxt: {
      color:globalVars.colors.black,
      fontSize: 17,
      fontWeight: '500'
    }

})

const StackedAvatars = () => {
  const img = 'https://images.unsplash.com/photo-1560238970-cc0ae073d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
  return (
    <View style={styles2.container}>
      <Image source={{uri: img}} style={styles2.avatar} />

      <Image source={{uri: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}} style={styles2.avatar} />

      <Image source={{uri: 'https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}} style={styles2.avatar} />
    </View>
  );
};

const styles2 = StyleSheet.create({
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
});