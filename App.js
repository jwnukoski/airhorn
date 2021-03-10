import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = useState();
  
  async function play() {
    const { sound } = await Audio.Sound.createAsync(
       require('./assets/airhorn.mp3')
    );
    setSound(sound)

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.fontContainer}>
        <Text style={styles.font}>Airhorn</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnContainer} onPress={play} accessibilityLabel="Play airhorn">
            <Text style={styles.btnTxt}>Play</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  font: {
    color: 'white',
    fontSize: 40,
    marginBottom: 40
  },
  btnContainer: {
    width: '100%',
    height: 100,
    marginTop: 10, 
    backgroundColor: 'white'
  },
  btnTxt: {
    fontSize: 40,
    paddingTop: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playBtn: {
    backgroundColor: 'grey',
    padding: 10
  }
});
