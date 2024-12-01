import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig";

const db = getFirestore(firebaseApp);

export const addCliente = async (clienteData) => {
  const clienteRef = collection(db, "clientes");
  const docRef = await addDoc(clienteRef, clienteData);
  return docRef.id;
};

export const addEventToCalendar = async (eventData) => {
  const calendarRef = collection(db, "events");
  const docRef = await addDoc(calendarRef, eventData);
  return docRef.id;
};
