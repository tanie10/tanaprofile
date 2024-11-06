// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/HomePageStyle';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home</Text>
      <Button onPress={() => navigation.navigate('Login')}>Logout</Button>
    </View>
  );
}