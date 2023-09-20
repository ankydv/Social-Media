import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import HeaderNav from './HeaderNav';
import Stories from './Stories';
import { globalStyles } from '../../styles';
import CreatePost from './CreatePost';

function HomeScreen():JSX.Element {
  return (
    <SafeAreaView style={[styles.container, globalStyles.body]}>
      <HeaderNav></HeaderNav>
      <Stories />
      <CreatePost/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


export default HomeScreen;
