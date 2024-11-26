import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CalendarAgenda from '../components/CalendarAgenda/CalendarAgenda';

const Homepage = () => {
  return (
    <View style={styles.container}>
        <CalendarAgenda />
    </View>
  );
};

Homepage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default Homepage;