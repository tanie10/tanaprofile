
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function LoadingPage() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/loading.gif')} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#ffbe64' 
  },
  avatar: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});
