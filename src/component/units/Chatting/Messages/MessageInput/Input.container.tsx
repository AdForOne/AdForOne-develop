import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { db, storage } from "../../../../../common/firebase/firebase.config";
import { ChatUserInfo } from "../../../../../common/recoil/chatuser";
import InputUI from "./Input.presenter";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function InputContainer() {
  const [text, setText] = useState<string>("");
  const [img, setImg] = useState<any>(null);
  const [imgfile, setFile] = useState();
  const [chatUser] = useRecoilState<any>(ChatUserInfo);

  // arrayUnion() 은 배열에 요소를 추가하지만 아직 존재하지 않는 요소만 추가합니다.
  const MessageSubmit = async () => {
    if (text === "" && img === null) {
      return;
    }
    if (img) {
      const storageRef = ref(storage, "Chat " + uuid());
      const uploadTask = uploadBytesResumable(storageRef, imgfile);

      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          // 업로드 %
          console.log(snapshot);
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error: any) => {
          // Error 메세지
          alert(`error: image upload error ${JSON.stringify(error)}`);
        },
        () => {
          // 업로드 후 url 가져와서 db 업데이트
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", chatUser.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: sessionStorage.uid,
                date: Timestamp.now(),
                profileImg: sessionStorage.profileImg,
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", chatUser.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: sessionStorage.uid,
          date: Timestamp.now(),
          profileImg: sessionStorage.profileImg,
        }),
      });
      await updateDoc(doc(db, "userChats", sessionStorage.uid), {
        [chatUser.chatId + ".lastMessage"]: {
          text,
        },
        [chatUser.chatId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", chatUser.userInfo.uid), {
        [chatUser.chatId + ".lastMessage"]: {
          text,
        },
        [chatUser.chatId + ".date"]: serverTimestamp(),
      });
    }
    setText("");
    setImg(null);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onChangeIMG = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      encodeFileToBase64(e.target.files[0]); // error
      setFile(e.target.files[0]);
    }
  };

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImg(reader.result);
        resolve();
      };
    });
  };
  return (
    <InputUI
      chatUser={chatUser}
      text={text}
      img={img}
      onChangeText={onChangeText}
      onChangeIMG={onChangeIMG}
      MessageSubmit={MessageSubmit}
    />
  );
}
