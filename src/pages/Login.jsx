import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomInput from '../components/CustomInput';
import { View, Button, Text, StyleSheet, Image, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import logoConfirmaZap from '../assets/logo-confirmaZap.png';
import { auth } from '../services/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.replace('Home');
      })
  };

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            source={logoConfirmaZap}
            style={{ width: 300, height: 300 }}
          />
            <Text style={{ fontWeight: 600, fontSize: 18, color: '#57636c' }}>
              Entre para começar
            </Text>
            <CustomInput
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(text) => setEmail(text)}
            />
            <CustomInput
                type="text"
                placeholder="Senha"
                value={password}
                onChange={(text) => setPassword(text)}
                secureTextEntry={true}
            />
            <View style={{ width: 292, backgroundColor: "#f48634", borderRadius: 4 }}>
              <Button title="Entrar" color="white" onPress={handleLogin} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
              <Text>Não tem conta?</Text>
              <TouchableOpacity onPress={() => navigation.replace('Cadastro')}>
                <Text style={{ color: 'blue' }}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
}

Login.propTypes = {
    navigation: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  const styles = StyleSheet.create({
    container: { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 60,
    },
    title: { fontSize: 24, marginBottom: 20 },
  }); 
  
export default Login;