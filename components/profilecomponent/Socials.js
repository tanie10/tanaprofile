import React from 'react';
import { View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Socials = () => {
  return (
    <View style={styles.socialIcons}>
      <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
        <FontAwesome name="facebook" size={20} color="black" style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
        <FontAwesome name="instagram" size={20} color="black" style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
        <FontAwesome name="twitter" size={20} color="black" style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')}>
        <FontAwesome name="youtube" size={20} color="black" style={styles.socialIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});

export default Socials;
