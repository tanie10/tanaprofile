// CoverImageProfileContainer.js
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const CoverImageProfileContainer = () => {
  return (
    <View style={styles.profileContainer}>
      <ImageBackground
        source={require('../../assets/cover-photo.jpg')}
        style={styles.coverImage}
        imageStyle={styles.coverImageStyle}
      >
        <View style={styles.waveOverlay} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    width: '100%',
    height: 200,
    
    
  },
  coverImage: {
    width: '110%',
    height: '100%',
    
    
  },
  coverImageStyle: {
    opacity: 0.5,
    borderRadius: 20,
  },
  waveOverlay: {
    pheight: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default CoverImageProfileContainer;
