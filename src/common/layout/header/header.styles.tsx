import styled from "@emotion/styled";

export const Outline = styled.div`
  width: 100%;
  height: 70px;
  padding: 3px 20px 3px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const Logo = styled.div`
  width: 130px;
  cursor: pointer;
`;
export const LogoImg = styled.img``;
export const HeaderBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #fff;
  width: 300px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  height: 40px;
  padding: 0px 5px;
  border: none;
  border-radius: 6px;
  background-color: #18a0fb;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0883d5;
  }
`;
