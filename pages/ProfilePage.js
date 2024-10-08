import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, useColorScheme } from 'react-native';
import ProfileCon from '../container/profile/ProfileCon';
import GalleryCon from '../container/profile/GalleryCon';
import SkillCon from '../container/profile/SkillCon';
import EduCon from '../container/profile/EduCon';
import MoreInfoCon from '../container/profile/MoreInfoCon';
import Toggle from '../components/profilecomponent/Toggle';

const ProfilePage = () => {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={isDarkMode ? require('../assets/dark-background.jpg') : require('../assets/light-background.jpg')}
        style={styles.backgroundImage}
      >
        <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ProfileCon />
        <GalleryCon />
        <SkillCon />
        <EduCon />
        <MoreInfoCon />
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

export default ProfilePage;