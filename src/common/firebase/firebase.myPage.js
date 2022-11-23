import { addDoc, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { auth, db } from "./firebase.config";

export default function useMyPage() {
  const createMyPage = async (email, Link, ServiceMain) => {
    try {
      await addDoc(doc(db, "myPage", email), {
        Link,
        ServiceMain,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchPage = async () => {
    const docRef = doc(db, "myPage");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const PageInfo = docSnap.data();
      console.log(PageInfo);
    } else {
      // doc.data() will be undefined in this case
    }
  };
  return { createMyPage };
}
