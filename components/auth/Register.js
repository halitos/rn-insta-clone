import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/compat/firestore';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';
// import { firebaseApp } from '../../App';

const Register = () => {
  const [logInfo, setLogInfo] = useState({ name: '', email: '', password: '' });

  const onSignUp = () => {
    const { email, password, name } = logInfo;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        // console.log('USER', user);

        const db = getFirestore();
        // console.log('DB', db);

        const docRef = addDoc(collection(db, 'users'), {
          name,
          email,
          createdAt: new Date(),
        });
        console.log('DOCREF', docRef);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('ERROR', errorCode, errorMessage);
      });
  };

  // const handleChange = (name, enteredText) => {
  //   setLogInfo({ ...logInfo, [name]:enteredText });
  // };

  return (
    <View>
      <TextInput
        placeholder='name'
        onChangeText={(name) => setLogInfo({ ...logInfo, name })}
        name='name'
      />
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
      <Button title='Sign Up' onPress={onSignUp} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
