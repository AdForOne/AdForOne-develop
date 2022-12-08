/* eslint-disable no-unused-expressions */
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { db } from "./firebase.config";

export default function useStorage() {
  const Upload = async (file, userEmail) => {
    // Create a root reference
    const storage = getStorage();
    const storageRef = ref(storage, userEmail + "ProfileImg");

    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log("이미지 업로드 완료" + snapshot);
    });
    await getDownloadURL(storageRef).then(async (downloadURL) => {
      try {
        console.log(downloadURL, "이미지 다운로드 완료");
        await updateDoc(doc(db, "users", userEmail), {
          profileImg: downloadURL,
        });
        return downloadURL;
      } catch (err) {
        console.log(err, "다운로드 에러");
      }
    });
  };

  return { Upload };
}
