import React from 'react'
import { StyleSheet, View } from 'react-native';

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

    </View>
  )
}


const styles = StyleSheet.create({
    feedContainer: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    feedsContainer: {
        backgroundColor: 'blue',
        alignItems: 'center',
    }
})