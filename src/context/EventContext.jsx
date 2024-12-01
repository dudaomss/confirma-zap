import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseApp } from '../services/firebaseConfig';
import { CalendarUtils } from 'react-native-calendars';

// Cria o contexto
const EventContext = createContext();

// Hook para usar o contexto
export const useEventContext = () => useContext(EventContext);

// Provedor do contexto
export const EventProvider = ({ children }) => {
  const [eventsByDate, setEventsByDate] = useState({});

  const db = getFirestore(firebaseApp);

  // Função para buscar eventos do Firestore
  const fetchEventsFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const events = [];
      querySnapshot.forEach((doc) => {
        const eventData = doc.data();
        events.push({
          id: doc.id,
          start: eventData.start,
          end: eventData.end,
          title: eventData.title,
          color: eventData.color || 'lightblue',
          ...eventData,
        });
      });

      // Agrupa eventos por data
      const groupedEvents = events.reduce((acc, event) => {
        const date = CalendarUtils.getCalendarDateString(event.start);
        if (!acc[date]) acc[date] = [];
        acc[date].push(event);
        return acc;
      }, {});

      setEventsByDate(groupedEvents);
    } catch (error) {
      console.error('Erro ao buscar eventos do Firestore:', error);
    }
  };

  // Busca os eventos quando o componente é montado
  useEffect(() => {
    fetchEventsFromFirestore();
  }, []);

  return (
    <EventContext.Provider value={{ eventsByDate, fetchEventsFromFirestore }}>
      {children}
    </EventContext.Provider>
  );
};