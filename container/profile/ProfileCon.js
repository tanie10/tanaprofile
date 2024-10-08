import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BackIcon from '../../components/profilecomponent/BackIcon';
import Avatar from '../../components/profilecomponent/Avatar';
import Toggle from '../../components/profilecomponent/Toggle';
import Socials from '../../components/profilecomponent/Socials';
import Bio from '../../components/profilecomponent/Bio';
import ProfileHeader from '../../components/profilecomponent/ProfileHeader';
import CoverImageProfileContainer from '../../components/profilecomponent/CoverImage';

const ProfileCon = () => {
  return (
    <View style={styles.container}>

      <View style={styles.profileContainer}>

        <View style={styles.coverContainer}>
          <CoverImageProfileContainer/>
        </View>

        <View style={styles.backIcon}>
          <BackIcon />
        </View>

        <View style={styles.avatarContainer}>
          <Avatar />
        </View>

        {/* Toggle Switch
        <View style={styles.toggleContainer}>
          <Toggle />
        </View> */}

        <View style={styles.profileheaderContainer}>
          <ProfileHeader/>
        </View>

        <View style={styles.socialContainer}>
          <Socials />
        </View>

        <View style={styles.bioContainer}>
          <Bio />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, 
  },
  coverContainer :{
    alignItems:'center',
    marginHorizontal: 28,
    right: 140,

  },
  profileContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    marginTop: 0, 
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    
  },
  avatarContainer: {
    position: 'absolute',
    marginTop: 30,
    paddingBottom: 20,
    zIndex: 1,
    alignItems: 'center',
    width: 100, 
    height: 100,
    borderRadius: 1000,

  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  /*toggleContainer: {
    position: 'absolute',
    top: 10,
    right: 10,  */
  
  profileheaderContainer: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 80, 
    color: '#333',
    
  },
  username: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  bioContainer: {
    paddingHorizontal: 2,
  },
});

export default ProfileCon;
