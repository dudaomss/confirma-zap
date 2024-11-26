import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomInput from '../components/CustomInput';
import { View, Button, Text, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'eduarda@gmail.com' && password === '1234') {
      navigation.replace('Home');
    } else {
      alert('Credenciais inválidas!');
    }
  };

    return (
        <View style={styles.container}>
            <Text>ConfirmaZap</Text>
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
            <Button title="Entrar" onPress={handleLogin} />
        </View>
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