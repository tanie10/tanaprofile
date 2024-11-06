import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffbe64',
  },
  avatar: {
    backgroundColor: '#f7ab9c',

  },
  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    color: '#834a47',
    marginVertical: 10,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,

  },
  input: {
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#834a47',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 5,
    backgroundColor: '#834a47',
  },
  orText: {
    marginVertical: 15,
    color: '#834a47',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#834a47',
  },
  registerText: {
    marginTop: 20,
    color: '#834a47',
    textDecorationLine: 'underline',
  },
});

export default styles;
