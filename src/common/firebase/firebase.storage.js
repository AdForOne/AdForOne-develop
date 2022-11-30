/* eslint-disable no-unused-expressions */
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

export default function useStorage() {
  const Upload = async (file, userEmail) => {
    // Create a root reference
    const storage = getStorage();
    const storageRef = ref(storage, userEmail + "ProfileImg");

    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log("이미지 업로드 완료");
    });
    await getDownloadURL(storageRef).then(async (downloadURL) => {
      try {
        console.log(downloadURL, "이미지 다운로드 완료");
        return downloadURL;
      } catch (err) {
        console.log(err, "다운로드 에러");
      }
    });
  };

  return { Upload };
}
