import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BackIcon = () => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={() => console.log('Back pressed')}>
      <Feather name="arrow-left" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});

export default BackIcon;
