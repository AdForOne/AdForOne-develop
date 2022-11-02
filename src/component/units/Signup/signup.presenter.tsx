import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Image from "next/image";
import * as SU from "./signup.styles";

export default function SignupPresenter(props: any) {
  return (
    <SU.Wrapper>
      <Image
        src="/header/Logo.png"
        alt="ADFO로고"
        width="200"
        height="48"
      ></Image>
      <SU.SignupHeader>회원가입</SU.SignupHeader>
      {/* Radio */}
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="직책"
        name="radio-buttons-group"
      >
        <FormControlLabel value="광고주" control={<Radio />} label="광고주" />
        <FormControlLabel
          value="인플루언서"
          control={<Radio />}
          label="인플루언서"
        />
      </RadioGroup>
      <SU.InfoWrapper>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="이메일"
          name="email"
          autoComplete="email"
          autoFocus
          helperText="이메일을 입력해주세요"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
          helperText="비밀번호를 입력해주세요"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="Confirm password"
          label="비밀번호 확인"
          type="password"
          id="Confirm password"
          autoComplete="current-password"
          helperText="비밀번호를 확인해주세요"
        />

        {/* SNS 체크박스 */}
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={props.SNS}
          renderInput={(params) => (
            <TextField {...params} margin="normal" label="관심 SNS" />
          )}
        />

        {/* 카테고리 태그 */}
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={props.categories}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={props.icon}
                checkedIcon={props.checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              margin="normal"
              {...params}
              label="관심분야/카테고리"
              placeholder="Category"
            />
          )}
        />

        <Button variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
          회원가입
        </Button>
      </SU.InfoWrapper>
    </SU.Wrapper>
  );
}
