import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2f2d52;
  height: 50px;
  padding: 10px;
  color: #ddddf7;
`;

export const Logo = styled.span`
  font-weight: bold;
`;

export const User = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const UserIMG = styled.img`
  background-color: #ddddf7;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
`;
