import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const CustomInput = ({ 
  type, 
  placeholder, 
  value, 
  onChange, 
  secureTextEntry = false 
}) => {
  const [error, setError] = useState('');

  const validateInput = (text) => {
    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(text)) {
        setError('E-mail inválido');
      } else {
        setError('');
      }
    } else if (type === 'phone') {
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneRegex.test(text)) {
        setError('Número de telefone inválido');
      } else {
        setError('');
      }
    } else {
      setError('');
    }
  };

  const handleChange = (text) => {
    validateInput(text);
    onChange(text);
  };

  const keyboardType = {
    email: 'email-address',
    phone: 'phone-pad',
    text: 'default',
  }[type] || 'default';

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{placeholder}</Text>
      <TextInput
        style={[styles.input, error ? styles.errorBorder : null]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
});

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
};

export default CustomInput;
