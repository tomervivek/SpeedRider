import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';

const VerifyOTP = ({ navigation: { navigate } }) => {
  const [focused, setFocused] = useState(false);
  const [otp, setOtp] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ padding: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ height: 120 }}
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
            Verify OTP
          </Text>
          <Text
            style={{
              fontSize: 16,
              maxWidth: '60%',
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Enter the OTP sent to your email
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <AppTextInput
            placeholder="Enter OTP"
            value={otp}
            style={styles.input}
            onChangeText={setOtp}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate('Home');
          }}
          style={{
            
            backgroundColor: '#1F41BB',
            paddingVertical: 15,
            marginVertical: 20,
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
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 13,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
export default VerifyOTP;
