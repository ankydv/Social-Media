import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeaderNav from './HeaderNav';
import Stories from './Stories';
import { globalStyles } from '../../styles';
import CreatePost from './CreatePost';
import Feeds from './Feeds';

function HomeScreen():JSX.Element {
  return (
    <View style={[styles.container, globalStyles.body]}>
      <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll={true}>
        <HeaderNav></HeaderNav>
        <Stories />
        <CreatePost/>
        <Feeds/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


export default HomeScreen;
