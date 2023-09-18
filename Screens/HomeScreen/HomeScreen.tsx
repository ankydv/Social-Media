import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import HeaderNav from './HeaderNav';

function HomeScreen():JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderNav></HeaderNav>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


export default HomeScreen;
