import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Toggle({ isDarkMode, setIsDarkMode }) {
  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.switchContainer}>
      <TouchableOpacity style={styles.toggleContainer} onPress={toggleSwitch}>
        <View style={[styles.toggle, isDarkMode ? styles.darkModeToggle : styles.lightModeToggle]}>
          <View style={[styles.iconContainer, isDarkMode ? styles.iconRight : styles.iconLeft]}>
            {isDarkMode ? (
              <Feather name="moon" size={16} color="black" />
            ) : (
              <Feather name="sun" size={16} color="black" />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  toggleContainer: {
    width: 80,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
    top: 35,
    right: 30,
  },
  toggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: '#fff',
    width: '150%',
    height: '150%',
    padding: 5,
    
  },
  lightModeToggle: {
    backgroundColor: '#00aaff',
  },
  darkModeToggle: {
    backgroundColor: '#333',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 15.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    position: 'absolute',
    left: 5,
  },
  iconRight: {
    position: 'absolute',
    right: 5,
  },
});