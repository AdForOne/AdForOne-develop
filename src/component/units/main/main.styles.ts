import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const TestImg = styled.img`
  width: 100%;
  height: 100vh;
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
  margin-top: 5rem;
  margin-bottom: 10rem;
`;

export const CategoryGridBox = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(9, 1fr);
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
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