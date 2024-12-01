import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const ModalCadaster = ({ item, onPressDetailsAgenda }) => {
  return (
    <TouchableOpacity 
      style={styles.eventItem} 
      onPress={onPressDetailsAgenda}
    >
      <Text style={styles.eventTitle}>{item.cliente}</Text>
      <Text style={styles.eventDetails}>{item.time}</Text>
      <Text style={styles.eventDetails}>{item.procedimento}</Text>
    </TouchableOpacity>
  );
};

ModalCadaster.propTypes = {
  item: PropTypes.shape({
    cliente: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    procedimento: PropTypes.string.isRequired,
  }).isRequired,
  onPressDetailsAgenda: PropTypes.func.isRequired,
};

export default ModalCadaster;

const styles = StyleSheet.create({
  eventItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
    borderRadius: 5,
  },
  eventTitle: { fontSize: 16, fontWeight: 'bold' },
  eventDetails: { fontSize: 14, color: 'gray' },
});
