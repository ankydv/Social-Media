import React from 'react';
import {View, ScrollView, Image, StyleSheet, Text} from 'react-native';
import { globalVars } from '../../styles';
// import LinearGradient from 'react-native-linear-gradient';

const Stories = (): JSX.Element => {

  const arr = new Array(10).fill({
    url: 'https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Fuck',
    dp: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  })

  return (
    <ScrollView style={styles.storiesContainer} horizontal>
      {arr.map((e, index) => (
          <StoryCard obj={e} />
        ))}
    </ScrollView>
  );
};

const StoryCard = ({obj} : {obj:any}): JSX.Element => {
  return (
    <View style={styles.storyCard}>
        {/* <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
        style={styles.gradient}
      > */}
      <Image
        source={{
          uri: obj.url,
        }}
        style={{height: 170, width: 95}}></Image>
        
        {/* <StoryCardOverlay /> */}
      {/* </LinearGradient> */}
        <Image source={{uri: obj.dp }} style={styles.icon}></Image>
        <Text style={styles.txtName}>{obj.name}</Text>
    </View>
  );
};

// const StoryCardOverlay = () => {
//     return (
//         <View style={styles.overlay} />
//     );
//   };

const styles = StyleSheet.create({
  storyCard: {
    position: 'relative',
    flex: 1,
    width: 95,
    height: 170,
    // aspectRatio: 1/2,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 15,
    overflow: 'hidden',
    // borderBottomRightRadius: 0,
    // borderTopLeftRadius: 0,
  },
  storiesContainer: {
    margin: 10,
    flex: 1,
    gap: 2,
  },
  icon: {
    position: 'absolute',
    width: 30,
    aspectRatio:1/1,
    borderRadius: 50,
    top: 8,
    right: 8,
    borderWidth: 2,
    borderColor: globalVars.colors.danger,
  },
  txtName:{
    position: 'absolute', 
    color: 'black',
    bottom: 0,
},
// overlay: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'black', // Set the overlay color to black
//     height: 100, // Adjust the height as needed
//     // opacity: 0.5,
//   },
});

export default Stories;
