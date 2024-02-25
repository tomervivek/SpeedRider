import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';

// Import your local image
import localImage from '../../assests/logo.png';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar hidden />
      <Image
        style={{height: 250, width: '100%', resizeMode: 'contain'}}
        source={localImage}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
