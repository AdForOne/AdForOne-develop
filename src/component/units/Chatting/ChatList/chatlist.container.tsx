import ChatListUI from "./chatlist.presenter";

const User = [
  { ID: "1", Name: "블랙", Message: "카드1" },
  { ID: "2", Name: "핑크", Message: "카드2" },
  { ID: "3", Name: "뚜두", Message: "카드3" },
  { ID: "4", Name: "뚜두", Message: "카드4" },
  { ID: "5", Name: "마지막", Message: "카드5" },
  { ID: "6", Name: "처럼", Message: "카드6" },
  { ID: "7", Name: "블랙", Message: "카드7" },
  { ID: "8", Name: "핑크", Message: "카드8" },
  { ID: "9", Name: "에리어", Message: "카드9" },
];

export default function ChatListContainer() {
  return (
    <>
      <ChatListUI User={User} />
    </>
  );
}
