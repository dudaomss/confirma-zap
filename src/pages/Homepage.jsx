import React from 'react';
import PropTypes from 'prop-types';
import CalendarAgenda from '../components/CalendarAgenda';

const Homepage = ({ navigation }) => {
  return (
    <CalendarAgenda navigation={navigation} />
  );
};

Homepage.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default Homepage;