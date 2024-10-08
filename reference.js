 // Reference Code , Only Length, Wala pa na bungkag

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ImageBackground, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Background Image */}
        <ImageBackground
          source={
            isDarkMode
              ? require('./assets/dark-background.jpg')  // Dark mode background
              : require('./assets/light-background.jpg') // Light mode background
          }
          style={styles.backgroundImage}
        >
          {/* Profile Container with Cover Image In the Back*/}
          <View style={styles.profileContainer}>
            <ImageBackground
              source={require('./assets/cover-photo.jpg')}
              style={styles.coverImage}
              imageStyle={styles.coverImageStyle}
            >
              <View style={styles.waveOverlay} />
            </ImageBackground>

            {/* Avatar Section */}
            <View style={styles.avatarContainer}>
              <Image
                source={require('./assets/avatar.jpg')} 
                style={styles.avatar}
              />
            </View>

            {/* Back Icon Section */}
            <TouchableOpacity style={styles.backButton} onPress={() => console.log('Back pressed')}>
              <Feather name="arrow-left" size={24} color={isDarkMode ? 'white' : 'black'} />
            </TouchableOpacity>

            {/* Toggle Icon */}
            <View style={styles.switchContainer}>
              <TouchableOpacity style={styles.toggleContainer} onPress={toggleSwitch}>
                <View style={[styles.toggle, isDarkMode ? styles.darkModeToggle : styles.lightModeToggle]}>
                  <View style={[styles.iconContainer, isDarkMode ? styles.iconRight : styles.iconLeft]}>
                    {isDarkMode ? (
                      <Feather name="moon" size={16} color="black" />
                    ) : (
                      <Feather name="sun" size={16} color="black" />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* Profile Header */}
            <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>Tana Alexandra Lastimosa</Text>
            <Text style={[styles.username, isDarkMode ? styles.darkText : styles.lightText]}>@tan_i_yah</Text>

            {/* Socialsz Media Icons */}
            <View style={styles.socialIcons}>
              <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
                <FontAwesome name="facebook" size={20} color={isDarkMode ? 'white' : 'black'} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
                <FontAwesome name="instagram" size={20} color={isDarkMode ? 'white' : 'black'} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
                <FontAwesome name="twitter" size={20} color={isDarkMode ? 'white' : 'black'} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')}>
                <FontAwesome name="youtube" size={20} color={isDarkMode ? 'white' : 'black'} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>

            {/* Bio Section */}
            <Text style={[styles.bio, isDarkMode ? styles.darkText : styles.lightText]}>
              Passionate software developer with a love for creating mobile and web apps. Always exploring new tech and coding challenges!
            </Text>
          </View>


          {/* Gallery Container */}
          <View style={styles.galleryContainer}>
            <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>Gallery</Text>
            <View style={styles.galleryImages}>
              <Image source={require('./assets/feature2.jpg')} style={styles.galleryImage} />
              <Image source={require('./assets/feature2.jpg')} style={styles.galleryImage} />
              <Image source={require('./assets/feature2.jpg')} style={styles.galleryImage} />
            </View>
            <TouchableOpacity style={styles.viewMoreButton}>
              <Text style={styles.viewMoreText}>View More</Text>
            </TouchableOpacity>
          </View>
      
          {/* Skill Container */}
          <View style={styles.skillContainer}>
            <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>Skills</Text>
            <View style={styles.skill}>
              <Text style={styles.skillText}>JavaScript</Text>
              <View style={styles.skillBar}>
                <View style={[styles.skillProgress, { width: '90%' }]} />
              </View>
            </View>
            <View style={styles.skill}>
              <Text style={styles.skillText}>React Native</Text>
              <View style={styles.skillBar}>
                <View style={[styles.skillProgress, { width: '80%' }]} />
              </View>
            </View>
            <View style={styles.skill}>
              <Text style={styles.skillText}>Python</Text>
              <View style={styles.skillBar}>
                <View style={[styles.skillProgress, { width: '75%' }]} />
              </View>
            </View>
          </View>

          {/*Educational Section*/}
          <View style={styles.educationContainer}>
            <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>Education</Text>

            <View style={styles.educationItem}>
              <FontAwesome name="graduation-cap" size={24} color={isDarkMode ? 'white' : 'black'} />
              <Text style={[styles.educationText, isDarkMode ? styles.darkText : styles.lightText]}>B.S. in Information Technology, USTP-CDO</Text>
            </View>

            <View style={styles.educationItem}>
              <FontAwesome name="graduation-cap" size={24} color={isDarkMode ? 'white' : 'black'} />
              <Text style={[styles.educationText, isDarkMode ? styles.darkText : styles.lightText]}>Liceo de Cagayan University</Text>
            </View>
          </View>


          {/* More Info Container */}
          <View style={styles.moreInfoContainer}>
            <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>More Info</Text>

            <View style={styles.infoItem}>
              <Text style={[styles.infoText, isDarkMode ? styles.darkText : styles.lightText]}>
                <FontAwesome name="heart" size={20} color={isDarkMode ? 'white' : 'black'} /> {/* Icon inside Text */}
                Hobbies: Sleeping, Traveling, Reading
              </Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={[styles.infoText, isDarkMode ? styles.darkText : styles.lightText]}>
                <FontAwesome name="thumbs-up" size={20} color={isDarkMode ? 'white' : 'black'} /> {/* Icon inside Text */}
                Likes: Sleeping, DayDreaming, Eating
              </Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={[styles.infoText, isDarkMode ? styles.darkText : styles.lightText]}>
                <FontAwesome name="thumbs-down" size={20} color={isDarkMode ? 'white' : 'black'} /> {/* Icon inside Text */}
                Dislikes: Feeling Close
              </Text>
            </View>
          </View>

        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  profileContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',  
    borderRadius: 30,  // Rounder corners
    padding: 15,  
    alignItems: 'center',
    marginTop: '5%',  // Raised d
    marginHorizontal: 1, 
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    blurRadius: 10,
  },
  coverImage: {
    width: '100%',
    height: 150, 
    position: 'relative',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  coverImageStyle: {
    opacity: 0.6, 
  },
  waveOverlay: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  avatarContainer: {
    position: 'absolute',
    top: 110,
    left: '50%',
    transform: [{ translateX: -55 }], 
    zIndex: 1,
  },
  avatar: {
    width: 110, 
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  switchContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  toggleContainer: {
    width: 60,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
  },
  toggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    padding: 5,
  },
  lightModeToggle: {
    backgroundColor: '#00aaff',
  },
  darkModeToggle: {
    backgroundColor: '#333',
  },
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    position: 'absolute',
    left: 5,
  },
  iconRight: {
    position: 'absolute',
    right: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 60, 
  },
  username: {
    fontSize: 14,
    color: '#888',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  bio: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },

  // Gallery Container
  galleryContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 30,
    padding: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  galleryImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  galleryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  viewMoreButton: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 20,
  },
  viewMoreText: {
    color: 'white',
    fontWeight: '600',
  },

  // Skill Container
  skillContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 30,
    padding: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  skill: {
    marginBottom: 15,
  },
  skillText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  skillBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  skillProgress: {
    height: '100%',
    backgroundColor: '#007BFF',
  },


  // Education Container
  educationContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 30,
    padding: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  educationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  educationText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },


  // More Info Container
  moreInfoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 30,
    padding: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  }

});
