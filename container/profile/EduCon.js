import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const EduCon = () => {
  return (
    <View style={styles.eduContainer}>
      <Text style={styles.sectionTitle}>Education</Text>
      <FontAwesome name="graduation-cap" size={16} color="#333" style={styles.EducIcon}/>
      <Text style={styles.eduText}>B.S in Information Technology- USTP-CDO</Text>
      <FontAwesome name="graduation-cap" size={16} color="#333" style={styles.EduIcon}/>
      <Text style={styles.eduText}>3rd Year, IT3R4_Track1 IOT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eduContainer: {
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
  eduText: {
    fontSize: 16,
    color: '#333',
  },
  EduIcon: {
    top: 5, 
  },
});

export default EduCon;
