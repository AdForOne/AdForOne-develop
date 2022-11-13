import { Button } from "@mui/material";
import * as IS from "./Input.styles";

export default function InputUI() {
  return (
    // Input
    <IS.Wrapper>
      <IS.MessageInput type="text" placeholder="대화를 입력해주세요" />
      <IS.MessageWrapper>
        {/* 이미지를 넣는다면 이미지아이콘과 input 태그 설정하기 */}
        <Button variant="contained" size="small">
          보내기
        </Button>
      </IS.MessageWrapper>
    </IS.Wrapper>
  );
}
