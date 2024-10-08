import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ProfilePage from './pages/ProfilePage'; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfilePage />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/* To Modify Other Content :< */
