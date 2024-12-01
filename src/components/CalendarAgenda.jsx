import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ExpandableCalendar, TimelineList, CalendarProvider } from 'react-native-calendars';
import { useEventContext } from '../context/EventContext';

const INITIAL_TIME = { hour: 9, minutes: 0 };

const CalendarAgenda = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
  const { eventsByDate } = useEventContext();

  const onDateChanged = (date, source) => {
    console.log('onDateChanged:', date, source);
    setCurrentDate(date);
  };

  const timelineProps = {
    format24h: true,
    onEventPress: (event) => {
      navigation.navigate('Detalhe do agendamento', { event });
    },
  };

  return (
    <CalendarProvider
      date={currentDate}
      onDateChanged={onDateChanged}
      showTodayButton
      disabledOpacity={0.6}
    >
      <ExpandableCalendar
        firstDay={1}
        theme={{
          arrowColor: '#f48634',
          selectedDayBackgroundColor: '#f48634',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#f48634',
          textDayFontWeight: 'bold',
        }}
      />
      <TimelineList
        events={eventsByDate}
        timelineProps={timelineProps}
        showNowIndicator
        scrollToFirst
        initialTime={INITIAL_TIME}
      />
    </CalendarProvider>
  );
};

CalendarAgenda.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CalendarAgenda;