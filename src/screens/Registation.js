import React, {useState} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './Login';

const Register = ({navigation: {navigate}}) => {
  const [focused, setFocused] = useState(false);

  return (
    <SafeAreaView>
      <View style={{padding: 20, marginVertical:30}}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              color: '#1f41bb',
              // marginVertical: 30,
              fontWeight: 'bold',
            }}>
            Create Account
          </Text>
          <Text
            style={{
              fontSize: 16,
              maxWidth: '80%',
              textAlign: 'center',
              marginBottom:10,
              // fontWeight: '600',
            }}>
            Create an account so for safe and sound ride
          </Text>
        </View>
        <View style={{marginVertical: 10}}>
          <AppTextInput placeholder="Name"  style={styles.input}  />
          <AppTextInput placeholder="Email"  style={styles.input}  />
          <AppTextInput placeholder="Password"  style={styles.input}  />
          <AppTextInput placeholder="Confirm Password"  style={styles.input}  />
        </View>
        <TouchableOpacity
        onPress={() => {
          console.log('VerifyOTP');
          navigate('VerifyOTP');
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
          Create Account
        </Text>
      </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('login');
            navigate('Login');
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
            Already have an account
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
export default Register;
