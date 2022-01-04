import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';


const index = ({navigation}) => {

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');

  async function handleLogin() {

    const user = {
      email,
      senha,
    };
    setUsuario(user);
    await AsyncStorage.setItem('USER', JSON.stringify(user));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={usuario}
        onChangeText={setUsuario}
        placeholder="Usuario"
        style={styles.inputContainer}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.inputContainer}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CADASTRO')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
