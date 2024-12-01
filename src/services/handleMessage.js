import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { firebaseApp } from "./firebaseConfig";

const db = getFirestore(firebaseApp);

export const handleMessageChange = async (text) => {
  try {
    const docRef = doc(db, 'config', 'whatsappMessage');
    await setDoc(docRef, { message: text });
    alert('Mensagem salva com sucesso!');
  } catch (error) {
    console.error("Erro ao salvar mensagem no Firebase: ", error);
  }
};