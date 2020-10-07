import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Alert} from 'react-native';

import SoundPlayer from 'react-native-sound-player';

const Key = ({keyName, keyStyle}) => {
  const playSound = (keyName) => {
    setTimeout(() => {
      try {
        SoundPlayer.playSoundFile(keyName, 'wav');
      } catch (error) {
        Alert.alert(error);
        console.log('unable to play', e);
      }
    }, 5);
  };

  return (
    <TouchableOpacity
      onPress={() => playSound(keyName)}
      style={[styles.keyWrapper, keyStyle]}>
      <Text style={styles.keyName}>{keyName?.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  keyWrapper: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 15,
    marginVertical: 8,
    backgroundColor: 'rgb(255, 0, 0)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  keyName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default Key;
