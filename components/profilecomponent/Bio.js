import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bio = () => {
  return (
    <View style={styles.bioContainer}>
      <Text style={styles.bioText}>
        Ersss......
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bioContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bioText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});

export default Bio;
