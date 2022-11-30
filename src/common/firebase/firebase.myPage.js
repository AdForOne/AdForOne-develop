import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";

export default function usePage() {
  const createMyPage = async (email, Link, ServiceMain) => {
    try {
      const docRef = await updateDoc(doc(db, "users", email), {
        Link,
        ServiceMain,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return { createMyPage };
}
