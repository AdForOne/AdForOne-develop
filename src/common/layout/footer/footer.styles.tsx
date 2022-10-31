import styled from "@emotion/styled";

export const Outline = styled.div`
  width: 100%;
  height: 275px;
  padding: 0px 30px 0px 30px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div``;
export const MiddleText = styled.div`
  color: #bdbdbd;
  font-size: 14px;
`;
export const LinkWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const LinkText = styled.div`
  font-weight: 700;
  border-bottom: 2px solid #000;
  cursor: pointer;
`;

// 모달 내부 스타일
export const GitHubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const GitHubLink = styled.a`
  font-size: 18px;
  border-bottom: 2px solid #000;

  &:hover {
    color: #18a0fb;
    border-bottom: 2px solid #18a0fb;
  }
`;
