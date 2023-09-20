import React from 'react';
import {View, ScrollView, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { globalVars } from '../../styles';
import LinearGradient from 'react-native-linear-gradient';

const Stories = (): JSX.Element => {

  const arr = new Array(10).fill({
    url: 'https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Fuck',
    dp: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  })

  return (
    <View style={styles.storiesContainer}>
    <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
      {arr.map((e, index) => (
          <StoryCard obj={e} />
        ))}
    </ScrollView>
    </View>
  );
};

const StoryCard = ({obj} : {obj:any}): JSX.Element => {
  return (
    <TouchableOpacity style={styles.storyCard}>
        <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)',]}
        start={{ x: 0, y: 0.5 }} end={{ x: 0, y: 1 }}
      >
      <Image
        source={{
          uri: obj.url,
        }}
        style={{height: 170, width: '100%', zIndex: -1}}></Image>
      </LinearGradient>
        <Image source={{uri: obj.dp }} style={styles.icon}></Image>
        <Text style={styles.txtName}>{obj.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  storyCard: {
    position: 'relative',
    flex: 1,
    width: 95,
    height: 170,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  storiesContainer: {
    margin: 10,
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
    color: globalVars.colors.white,
    bottom: 8,
    left: 8,

},

});

export default Stories;
