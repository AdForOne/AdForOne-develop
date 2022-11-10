import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const UserChatWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2f2d52;
  }
`;

export const UsersImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserChatInfo = styled.div``;

export const UserName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const LatestMessage = styled.p`
  font-size: 14px;
  color: lightgray;
  margin: 0px;
`;
