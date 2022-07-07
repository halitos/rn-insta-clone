import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';

const Login = () => {
  const [logInfo, setLogInfo] = useState({ email: '', password: '' });

  const onLogIn = () => {
    const { email, password } = logInfo;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('USER', user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('ERROR', errorCode, errorMessage);
      });
  };

  return (
    <View>
      <TextInput
        placeholder='email'
        onChangeText={(email) => setLogInfo({ ...logInfo, email })}
        name='email'
      />
      <TextInput
        placeholder='password'
        secureTextEntry={true}
        onChangeText={(password) => setLogInfo({ ...logInfo, password })}
        name='password'
      />
      <Button title='Sign In' onPress={onLogIn} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
