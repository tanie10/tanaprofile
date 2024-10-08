import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MoreInfoCon = () => {
  return (
    <View style={styles.moreInfoContainer}>
      <Text style={styles.sectionTitle}>More Information</Text>
      <FontAwesome name="graduation-cap" size={16} color="#333" style={styles.moreInfoIcon}/>
      <Text style={styles.moreInfoText}>
        Currently Stuggle...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  moreInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 30,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  moreInfoText: {
    fontSize: 16,
    color: '#333',
    bottom: 20,
    left: 30, 
  },
  moreInfoIcon: {
    
  },
});

export default MoreInfoCon;
