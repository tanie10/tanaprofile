// ../styles/RegisterStyle.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#ffbe64' 
  },
  avatar: {
    width: 120,
    height: 120,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginVertical: 10,
    color: '#834a47' 
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 10,
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    borderColor: 'transparent',
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    color: '#834a47',
  },
  input: { 
    width: '100%', 
    marginBottom: 10, 
    backgroundColor: 'transparent',
  },
  button: { 
    width: '100%', 
    paddingVertical: 8, 
    marginVertical: 10,
    backgroundColor: '#834a47',
  },
  loginText: { 
    marginTop: 20, 
    color: '#834a47',
  }
});

export default styles;
