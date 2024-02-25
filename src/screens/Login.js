import React, {useState} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({navigation: {navigate}}) => {
  const [focused, setFocused] = useState(false);

  return (
    <SafeAreaView>
      <View style={{paddingTop: 30, paddingHorizontal:30}}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{height: 120}}
            resizeMode="contain"
            source={require('../../assests/logo.png')}
          />
          <Text
            style={{
              fontSize: 24,
              color: '#1f41bb',
              marginTop: 20,
              fontWeight: 'bold',
            }}>
            Login Here
          </Text>
          <Text
            style={{
              fontSize: 16,
              maxWidth: '60%',
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Welcome back you've been missed!
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <AppTextInput placeholder="Email"       placeholderTextColor="#999"
          style={styles.input} />
          <AppTextInput placeholder="Password"       placeholderTextColor="#999"
          style={styles.input} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: '#1f41bb',
              marginVertical:5,
              alignSelf: 'flex-end',
            }}>
            Forgot your password ?
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('Home');
            navigate('Home');
          }}
          style={{
            backgroundColor: '#1F41BB',
            paddingVertical: 15,
            marginVertical:20,
            paddingHorizontal: 20,
            width: '100%',
            borderRadius: 50,
            shadowColor: '#1f41bb',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5, // for Android shadow
          }}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 20,
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('login');
            navigate('Register');
          }}
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 14,
            }}>
            Create new account
          </Text>
        </TouchableOpacity>
        <View style={{borderTopColor:'#BFCCB5', borderTopWidth:1, 
         marginVertical:18 }} />
        <View style={{}}>
          <Text style={{color: '#1f41bb',   textAlign: 'center', marginBottom:4, fontSize: 14}}>
            or continue with
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#ddd',
                borderRadius: 5,
                marginHorizontal: 10,
              }}>
              <Ionicons name="logo-google" color="#000" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#ddd',
                borderRadius: 5,
                marginHorizontal: 10,
              }}>
              <Ionicons name="logo-apple" color="#000" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#ddd',
                borderRadius: 5,
                marginHorizontal: 10,
              }}>
              <Ionicons name="logo-twitter" color="#000" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#ddd',
                borderRadius: 5,
                marginHorizontal: 10,
              }}>
              <Ionicons name="logo-facebook" color="#000" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical:13,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default Login;
