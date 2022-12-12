import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TestImg = styled.img`
  width: 100%;
  height: 50vh;
`;

export const FindText = styled.p`
  font-weight: 700;
  font-size: 32px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Bar = styled.div`
  height: 32px;
  font-weight: 700;
  font-size: 20px;
  border-left: 3px solid #bdbdbd;
  margin: 0px 10px 0px 10px;
`;

export const CardGridBox = styled.div`
  display: grid;
  place-items: center;
  grid-row-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`;

export const BtnBox = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
