// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button, Text, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Loading from '../pages/LoadingPage';
import styles from '../styles/RegisterStyle';

export default function RegisterPage() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Home');
    }, 3000);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Cat.gif')} style={styles.avatar} />
      <Text style={styles.title}>Register</Text>

      <View style={styles.socialButtons}>
        {["google", "facebook", "twitter"].map((platform) => (
          <Button
            key={platform}
            icon={({ size }) => (
              <Avatar.Icon
                size={30}
                icon={platform}
                color="white"
                style={{ backgroundColor: platformColors[platform] }}
              />
            )}
            mode="outlined"
            onPress={() => {}}
            style={styles.socialButton}
          />
        ))}
      </View>

      <Text style={styles.orText}>Or, register with email ...</Text>

      <TextInput
        label="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <TextInput
        label="Email ID"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Register
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const platformColors = {
  google: "#DB4437",
  facebook: "#4267B2",
  twitter: "#1DA1F2",
};
