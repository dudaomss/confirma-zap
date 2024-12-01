import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
import { firebaseApp } from '../services/firebaseConfig';

const Config = ({ navigation }) => {
  const [text, setText] = useState('');
  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const docRef = doc(db, 'config', 'whatsappMessage');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setText(docSnap.data().message || '');
        } else {
          console.log('Nenhuma mensagem salva encontrada.');
        }
      } catch (error) {
        console.error("Erro ao buscar mensagem no Firebase: ", error);
      }
    };

    fetchMessage();
  }, [db]);

  const handleMessageChange = async () => {
    try {
      const docRef = doc(db, 'config', 'whatsappMessage');
      await setDoc(docRef, { message: text });
      alert('Mensagem salva com sucesso!');
    } catch (error) {
      console.error("Erro ao salvar mensagem no Firebase: ", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.label}>Mensagem Whatsapp</Text>
        <TextInput
          style={styles.textarea}
          onChangeText={setText}
          value={text}
          maxLength={400}
          placeholder="Escreva uma mensagem padrão de confirmação"
          placeholderTextColor="#c7c7c7"
          multiline={true}
        />
        <Button title="Salvar Mensagem" onPress={handleMessageChange} />
        <Button title="Logout" style={{ color: 'red'}} onPress={() => navigation.replace('Login')} />
      </View>
    </TouchableWithoutFeedback>
  );
};

Config.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Config;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  textarea: {
    height: 180,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    textAlignVertical: 'top',
    fontSize: 14,
    color: '#333',
  },
});
