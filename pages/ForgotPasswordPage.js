// screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Loading from '../pages/LoadingPage';
import styles from '../styles/ForgotPasswordStyle';

export default function ForgotPasswordPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false); 
      alert('Password reset link sent to email');
      navigation.navigate('ForgotPassword');
    }, 3000);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Cat.gif')} style={styles.avatar} />
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        label="Email ID"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleResetPassword} style={styles.button}>
        Reset Password
      </Button>
      <Button onPress={() => navigation.navigate('Login')} style={styles.backButton}>
        Back to Login
      </Button>
    </View>
  );
}
