import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "./firebase.config";

export default function usePage() {
  const createMyPage = async (email, Link, ServiceMain) => {
    try {
      const docRef = await setDoc(doc(db, "myPage", email), {
        Link,
        ServiceMain,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return { createMyPage };
}
