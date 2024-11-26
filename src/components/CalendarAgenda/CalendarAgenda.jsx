import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';
import { Agenda } from 'react-native-calendars';
import ResumeAgenda from './components/ResumeAgenda';

const CalendarAgenda = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState('');
  const [events] = useState({
    '2024-11-23': [{ time: '10:00', cliente: 'Lucio', celular: '888888888', procedimento: 'Corte' }],
    '2024-11-24': [{ time: '10:00', cliente: 'Lucio', celular: '888888888', procedimento: 'Corte' }],
    '2024-11-25': [
      { time: '09:00', cliente: 'Ana Clara', celular: '999999999', procedimento: 'Manicure' },
      { time: '14:30', cliente: 'Luiza', celular: '999999999', procedimento: 'Corte' },
    ],
    '2024-11-26': [
      { time: '08:00', cliente: 'Maria', celular: '999999999', procedimento: 'Pedicure' },
      { time: '10:00', cliente: 'João', celular: '999999999', procedimento: 'Corte' },
      { time: '14:00', cliente: 'José', celular: '999999999', procedimento: 'Manicure' },],
  });

  const today = new Date().toISOString().split('T')[0];

  return (
    <Agenda
        items={events}
        selected={today}
        renderItem={(item) => (
            <ResumeAgenda  item={item} />
        )}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        renderEmptyDate={() => (
            <View style={styles.emptyDate}>
                <Text>Sem eventos</Text>
            </View>
        )}
        theme={{
        agendaDayTextColor: 'blue',
        agendaDayNumColor: 'green',
        }}
    />
  );
}

CalendarAgenda.propTypes = {
};

export default CalendarAgenda;

const styles = StyleSheet.create({
  emptyDate: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
