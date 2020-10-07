/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Home from './src/screens/home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
