

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
    backgroundColor: 'rgba(255, 255, 255, 0.6)',  // Semi-transparent background
    borderRadius: 30,  // Rounder corners
    padding: 15,  // Reduced padding for smaller container
    alignItems: 'center',
    marginTop: '5%',  // Raised the container even higher
    marginHorizontal: 1,  // Reduced horizontal margin for smaller width
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    blurRadius: 10,
  },
  coverImage: {
    width: '100%',
    height: 150,  // Reduced height of the cover image
    position: 'relative',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  coverImageStyle: {
    opacity: 0.6,  // Added transparency effect to the cover image
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
    transform: [{ translateX: -55 }],  // Center the avatar
    zIndex: 1,
  },
  avatar: {
    width: 110,  // Slightly smaller avatar size
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
    marginTop: 60,  // Adjusted for the new avatar position
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
