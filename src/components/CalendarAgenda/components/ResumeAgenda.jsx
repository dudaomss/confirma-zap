import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ResumeAgenda = ({ item }) => {
  return (
    <View style={styles.eventItem}>
        <Text style={styles.eventTitle}>{item.cliente}</Text>
        <Text style={styles.eventDetails}>{item.time}</Text>
        <Text style={styles.eventDetails}>{item.procedimento}</Text>
        <Text style={styles.eventDetails}>{item.celular}</Text>
    </View>
  );
}

ResumeAgenda.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ResumeAgenda;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  eventItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
    borderRadius: 5,
  },
  eventTitle: { fontSize: 16, fontWeight: 'bold' },
  eventDetails: { fontSize: 14, color: 'gray' },
  emptyDate: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
