import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.id === sessionStorage.uid ? "row-reverse" : "row"};
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

export const MessageText = styled.p`
  background-color: ${(props) =>
    props.id === sessionStorage.uid ? "#8da4f1" : "white"};
  padding: 10px 20px;
  border-radius: ${(props) =>
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
