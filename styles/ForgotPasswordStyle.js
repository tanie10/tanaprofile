// styles/ForgotPasswordStyle.js
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
    marginBottom: 20,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginVertical: 10,
    color: '#834a47' 
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
  backButton: { 
    marginTop: 20, 
    color: '#834a47',
  },
});

export default styles;
