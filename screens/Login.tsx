import { View, Text, TextInput, StyleSheet, Pressable, Button } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth,email, password);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }

  return (
    <View style = {{
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    }}>
        <Text>
        Email
      </Text>
      <TextInput
      value={email}
      autoCapitalize='none'
      placeholder='Email'
      style = {styles.input}
      onChangeText={(text) => setEmail(text)}>

      </TextInput>
      <Text>
        Password
      </Text>
      <TextInput
      value={password}
      autoCapitalize='none'
      placeholder='Password'
      secureTextEntry= {true}
      style = {styles.input}
      onChangeText={(text) => setPassword(text)}>

      </TextInput>
      <Button title='Login'
      onPress= {signIn}
      />
      <Button 
      color= 'coral'
      title='Sign Up'
      onPress= {signUp}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },});


export default Login