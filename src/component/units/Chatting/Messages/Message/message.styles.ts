import styled from "@emotion/styled";

// 채팅 ID 를 판단해서 내가 보낸 메세지는 row-reverse 적용 아니라면 No
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  margin-bottom: 20px;
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-weight: 300;
`;

export const MessageContext = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: max-content;
`;
// 채팅 ID 를 판단해서 메세지에 따라 radius 속성 적용 및 컬러 바꾸기
export const MessageText = styled.p`
  /* background-color: white; */
  background-color: #8da4f1;
  padding: 10px 20px;
  /* border-radius: 0px 10px 10px 10px; */
  border-radius: 10px 0px 10px 10px;
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
