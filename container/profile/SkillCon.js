import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SkillCon = () => {
  return (
    <View style={styles.skillContainer}>
      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.skillBarContainer}>
        <SkillBar skillName="Graphic Design" scale={80} color="#FF69B4" />
        <SkillBar skillName="HTML // CSS" scale={70} color="#FFD700" />
        <SkillBar skillName="Designing" scale={60} color="#90EE90" />
        <SkillBar skillName="WordPress" scale={90} color="#6495ED" />
      </View>
    </View>
  );
};

const SkillBar = ({ skillName, scale, color }) => {
  return (
    <View style={[styles.skillBar, { backgroundColor: color, width: `${scale}%` }]}>
      <Text style={styles.skillName}>{skillName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skillContainer: {
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
  skillBarContainer: {
    flexDirection: 'column',
  },
  skillBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height: 20,
    borderRadius: 10,
  },
  skillName: {
    fontSize: 15,
    marginRight: 30,
    left: 10,
  },
});

export default SkillCon;