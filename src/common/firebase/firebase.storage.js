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
        sessionStorage.setItem("profileImg", downloadURL);
        return downloadURL;
      } catch (err) {
        console.log(err, "다운로드 에러");
      }
    });
  };
  /** 1.저장할 파일 2.유저이메일 3.가격정보 종류(basic,expert,pro) */
  const UploadPriceCardImg = async (file, userEmail, PriceCate) => {
    const storage = getStorage();
    const storageRef = ref(storage, userEmail + PriceCate);

    // 이미지 업로드 함수
    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log("이미지 업로드 완료" + snapshot);
    });

    // 업로드 된 파일을 다운로드 해 오는 함수(url에 필요)
    await getDownloadURL(storageRef).then(async (downloadURL) => {
      try {
        console.log(downloadURL, "이미지 다운로드 완료");
        // 베이직
        if (PriceCate === "basic") {
          await updateDoc(doc(db, "users", userEmail), {
            basicImg: downloadURL,
          });
          sessionStorage.setItem("basicImg", downloadURL);
        }
        // 익스퍼트
        if (PriceCate === "expert") {
          await updateDoc(doc(db, "users", userEmail), {
            expertImg: downloadURL,
          });
          sessionStorage.setItem("expertImg", downloadURL);
        }
        // 프로
        if (PriceCate === "pro") {
          await updateDoc(doc(db, "users", userEmail), {
            proImg: downloadURL,
          });
          sessionStorage.setItem("proImg", downloadURL);
        }
      } catch (err) {
        console.log(err, "다운로드 에러");
      }
    });
  };

  return { Upload, UploadPriceCardImg };
}
