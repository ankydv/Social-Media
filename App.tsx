import * as React from 'react';
import Navigation from './Navigation';
import {StatusBar} from 'react-native';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Navigation />
    </>
  );
}

export default App;
