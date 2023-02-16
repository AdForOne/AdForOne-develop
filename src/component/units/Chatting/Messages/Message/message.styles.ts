import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props: any) =>
    props.id === sessionStorage.uid ? "row-reverse" : "row"};
  gap: 20px;
  margin-bottom: 20px;
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-weight: 300;
`;

export const MessageContext = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: max-content;
`;

export const MessageText = styled.p`
  background-color: ${(props: any) =>
    props.id === sessionStorage.uid ? "#8da4f1" : "white"};
  padding: 10px 15px;
  border-radius: ${(props: any) =>
    props.id === sessionStorage.uid
      ? "10px 0px 10px 10px"
      : "0px 10px 10px 10px"};
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ChatIMG = styled.img`
  width: 100%;
  height: 100%;
`;
