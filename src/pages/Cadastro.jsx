import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { auth } from '../services/firebaseConfig';
import CustomInput from '../components/CustomInput';

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleCadastro = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
        <CustomInput
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={setEmail}
        />
        <CustomInput
            type="text"
            placeholder="Senha"
            value={senha}
            onChange={setSenha}
            secureTextEntry={true}
        />
      {error ? <Text style={{ color: 'red'}}>{error}</Text> : null}
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};
Cadastro.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Cadastro;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
  },
}); 