import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const BackgroundImage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          isDarkMode
            ? require('../../assets/dark-background.jpg') 
            : require('../../assets/light-background.jpg')
        }
        style={styles.backgroundImage}
      >
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default BackgroundImage;

/* Wala nagamit HAHAHHHAHAHA */
