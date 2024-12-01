import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { firebaseApp } from "./firebaseConfig";

const db = getFirestore(firebaseApp);

export const addEventToCalendar = async (event) => {
  try {
    const docRef = doc(db, 'events', event.id.toString());
    await setDoc(docRef, event);
    console.log('Evento adicionado na agenda com sucesso!');
  } catch (error) {
    console.error("Erro ao adicionar evento na agenda: ", error);
  }
};