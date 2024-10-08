import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const GalleryCon = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMorePress = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.galleryContainer}>
      <Text style={styles.galleryTitle}>Gallery</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.galleryImages}>
          <Image source={require('../../assets/feature2.jpg')} style={styles.galleryImage} />
          <View style={styles.imageSpacing} />
          <Image source={require('../../assets/feature2.jpg')} style={styles.galleryImage} />
          <View style={styles.imageSpacing} />
          <Image source={require('../../assets/feature2.jpg')} style={styles.galleryImage} />
          {}
          {showMore && (
            <View style={styles.galleryImages}>
              <Image source={require('../../assets/feature2.jpg')} style={styles.galleryImage} />
              <View style={styles.imageSpacing} />
              <Image source={require('../../assets/feature2.jpg')} style={styles.galleryImage} />
              <View style={styles.imageSpacing} />
              <Image source={require('../../assets/feature2.jpg')} style={styles.galleryImage} />
              {}
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleShowMorePress}>
        <Text style={styles.viewMoreText}>
          {showMore ? 'Show Less' : 'View More'}
          <FontAwesome5 name={showMore ? 'chevron-up' : 'chevron-down'} size={12} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 20,
    borderRadius: 30,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  galleryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  galleryImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  galleryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  imageSpacing: {
    width: 10, 
  },
  viewMoreText: {
    color: 'white',
    fontWeight: '600',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GalleryCon;