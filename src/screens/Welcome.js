import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height} = Dimensions.get('window');

const Welcome = ({navigation: {navigate}}) => {
  return (<SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground
        style={{ height: 200 }}
        resizeMode="contain"
        source={require('../../assests/logo.png')}
      />
      <View style={{ marginTop:40 }}>
        <Text style={{ fontSize: 24, color: '#1F41BB', textAlign: 'center' }}>
          Enjoy your ride
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Explore your city with our rider
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
        <TouchableOpacity
          onPress={() => {
            console.log('login');
            navigate('Login');
          }}
          style={{
            backgroundColor: '#1F41BB',
            paddingVertical: 15,
            paddingHorizontal: 20,
            width: '100%',
            borderRadius: 50,
            shadowColor: '#1f41bb',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5, // for Android shadow
            // Note: elevation property is specific to Android, shadow properties are for iOS
          }}>
          <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            paddingVertical: 15,
            marginTop: 20,
            paddingHorizontal: 20,
            width: '100%',
            borderRadius: 50,
            shadowColor: '#1f41bb',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5,
          }}
          onPress={() => {
            console.log('Register');
            navigate('Register');
          }}>
          <Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
  );
};

export default Welcome;
