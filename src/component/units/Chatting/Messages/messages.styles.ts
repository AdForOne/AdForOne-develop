import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #ddddf7;
  padding: 10px;
  height: calc(100% - 100px);
  /* overflow: scroll; 
    스크롤 적용시 가로세로 다 스크롤 적용되어서 css 어긋남
  */
  overflow: auto;
`;
