import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import CustomInput from '../components/CustomInput';
import DropdownInput from '../components/CustomPicker';
import { addCliente } from '../services/clienteService';
import { useEventContext } from '../context/EventContext';
import DateTimePicker from '@react-native-community/datetimepicker';

const NewAgenda = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [procedure, setProcedure] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');
  const [data, setData] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { fetchEventsFromFirestore } = useEventContext();

  const handleAddCliente = async () => {
    const novoCliente = {
      nomeCliente: name,
      numeroTelefone: parseInt(phone, 10),
      procedimento: procedure,
      data: data.toISOString().split('T')[0],
      horaInicio,
      horaFim,
    };

    try {
      await addCliente(novoCliente);
      fetchEventsFromFirestore();

      setName('');
      setPhone('');
      setProcedure('');
      setHoraInicio('');
      setHoraFim('');
      setData(new Date());
    } catch (error) {
      console.error('Erro ao adicionar cliente:', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <CustomInput placeholder="Nome do cliente" type="text" value={name} onChange={(value) => setName(value)} />
        <CustomInput placeholder="Número de telefone" type="phone" value={phone} onChange={(value) => setPhone(value)} />
        <DropdownInput value={procedure} onChange={(value) => setProcedure(value)} />
          {/* Button to show DatePicker */}
        <Button title="Selecionar Data" onPress={() => setShowDatePicker(true)} />

        {/* DatePicker */}
        {showDatePicker && (
          <DateTimePicker
            value={data}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setData(selectedDate);
              }
            }}
          />
        )}
        <CustomInput placeholder="Hora de início" type="time" value={horaInicio} onChange={(value) => setHoraInicio(value)} />
        <CustomInput placeholder="Hora de fim" type="time" value={horaFim} onChange={(value) => setHoraFim(value)} />

        <Button title="Criar agendamento" onPress={handleAddCliente} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
});

export default NewAgenda;
