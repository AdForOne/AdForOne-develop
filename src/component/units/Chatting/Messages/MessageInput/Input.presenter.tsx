import { Button } from "@mui/material";
import * as IS from "./Input.styles";

export default function InputUI(props: any) {
  return (
    // Input
    <IS.Wrapper>
      <IS.MessageInput
        type="text"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
        placeholder="대화를 입력해주세요"
      />
      <IS.MessageWrapper>
        {/* 이미지를 넣는다면 이미지아이콘과 input 태그 설정하기 */}
        <Button variant="contained" size="small" onClick={props.MessageSubmit}>
          보내기
        </Button>
      </IS.MessageWrapper>
    </IS.Wrapper>
  );
}
