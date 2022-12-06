import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: coral; */
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupHeader = styled.h1`
  margin-bottom: 20px;
  letter-spacing: 10px;
`;

export const InfoWrapper = styled.div`
  width: 560px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Imagebutton = styled.div`
  width: 150px;
  height: 150px;
  margin-top: 6px;
  text-align: center;
  border: 1px solid #18a0fb;
  color: #fff;
  background-color: #18a0fb;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1976d2;
  }
`;

export const ImageBox = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;
