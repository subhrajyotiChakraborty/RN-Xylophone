import React from 'react';
import {View, StyleSheet} from 'react-native';

import Key from '../components/key';

const KEY_CONFIG = [
  {
    name: 'c',
    keyStyle: {backgroundColor: 'rgb(255, 0, 0)', marginHorizontal: 0},
  },
  {
    name: 'd',
    keyStyle: {backgroundColor: 'rgb(255, 146, 0)', marginHorizontal: 5},
  },
  {
    name: 'e',
    keyStyle: {backgroundColor: 'rgb(255, 208, 0)', marginHorizontal: 10},
  },
  {
    name: 'f',
    keyStyle: {backgroundColor: 'rgb(0, 208, 78)', marginHorizontal: 15},
  },
  {
    name: 'g',
    keyStyle: {backgroundColor: 'rgb(97, 63, 222)', marginHorizontal: 20},
  },
  {
    name: 'a',
    keyStyle: {backgroundColor: 'rgb(0, 106, 255)', marginHorizontal: 25},
  },
  {
    name: 'b',
    keyStyle: {backgroundColor: 'rgb(191, 39, 228)', marginHorizontal: 30},
  },
];

const Home = () => {
  return (
    <View style={styles.homeWrapper}>
      {KEY_CONFIG.map((key) => {
        return (
          <Key key={key.name} keyName={key.name} keyStyle={key.keyStyle} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
    // borderColor: 'blue',
    // borderWidth: 3,
    marginHorizontal: 10,
    marginTop: 8,
  },
});

export default Home;
