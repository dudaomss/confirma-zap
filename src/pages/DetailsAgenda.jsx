import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet, Linking, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseApp } from '../services/firebaseConfig';

const DetailsAgenda = ({ route }) => {
  const { event } = route.params;
  const [customMessage, setCustomMessage] = useState('');

  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const docRef = doc(db, 'config', 'whatsappMessage');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCustomMessage(docSnap.data().message);
        }
      } catch (error) {
        console.error("Erro ao recuperar mensagem do Firebase: ", error);
      }
    };

    fetchMessage();
  }, [db]);

  const openWhatsApp = ({ event }) => {
    const phoneNumber = event.numeroTelefone;
    const message = customMessage || "Olá, gostaria de confirmar o horário agendado.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert('Erro', 'WhatsApp não está instalado no dispositivo.');
        }
      })
      .catch((err) => console.error("Erro ao abrir WhatsApp: ", err));
  };

  if (!event) {
    return (
      <View style={styles.container}>
        <Text>Sem detalhes para exibir.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.nomeCliente}</Text>
      <Text>Data: {event.data}</Text>
      <Text>Horário: {event.horaInicio - event.horaFim}</Text>
      <Text>Procedimento: {event.procedimento}</Text>
      <Text>Celular: {event.numeroTelefone}</Text>
      <Button title="Confirmar horário" onPress={openWhatsApp} />
    </View>
  );
};

DetailsAgenda.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
        summary: PropTypes.string,
      }),
    }),
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DetailsAgenda;