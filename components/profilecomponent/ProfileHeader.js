import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ProfileHeader = ({ isDarkMode }) => {
  return (
    <>
      <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>
        Tana Alexandra Lastimosa
      </Text>
      <Text style={[styles.username, isDarkMode ? styles.darkText : styles.lightText]}>
        @tan_i_yah
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  username: {
    fontSize: 16,
    color: 'gray',
    alignSelf: 'center',
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: 'black',
  },
});

export default ProfileHeader;
