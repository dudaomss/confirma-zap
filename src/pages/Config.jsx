import React from 'react';
import { View,  Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Config = ({ navigation }) => (
    <View style={styles.container}>
        <Button title="Logout" onPress={() => navigation.replace('Login')} />
    </View>
  );

  Config.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Config;

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
