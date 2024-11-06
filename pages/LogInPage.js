import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Loading from '../pages/LoadingPage';
import styles from '../styles/LogInStyle';

export default function LogInPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
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
      <Avatar.Image
        size={170}
        source={require('../assets/Cat.gif')}
        style={styles.avatar}
      />
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.inputContainer}>
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
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot?</Text>
      </TouchableOpacity>
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Text style={styles.orText}>Or, login with ...</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>New to the app? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const platformColors = {
  google: "#DB4437",
  facebook: "#4267B2",
  twitter: "#1DA1F2",
};
