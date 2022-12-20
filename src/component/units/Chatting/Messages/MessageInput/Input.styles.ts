import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MessageInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #2f2d52;
  font-size: 18px;
  background-color: white;
  &::placeholder {
    color: lightgray;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  /* 전역변수가 설정이 안되어있다면 메세지도 안보내지게 설정 */
  pointer-events: ${(props: any) =>
    props.chatUser.chatId === null ? "none" : ""};
`;

export const DataImg = styled.img`
  height: 40px;
`;
