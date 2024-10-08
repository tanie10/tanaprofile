import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Avatar() {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={require('../../assets/avatar.jpg')}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'absolute',
    top: 120,
    left: '50%',
    transform: [{ translateX: -55 }],
    zIndex: 1,
  },
  avatar: {
    width: 135,
    height: 135,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#fff',
  },
});
