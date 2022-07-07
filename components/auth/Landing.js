import { View, Text, Button } from 'react-native';
import React from 'react';

const Landing = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        title='Register'
        onPress={() => navigation.navigate('Register')}
      />
      <Button title='Login' onPress={() => navigation.navigate('Login')} />
      <Text>TEST</Text>
    </View>
  );
};

export default Landing;
