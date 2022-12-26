import {
  Autocomplete,
  Button,
  Chip,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import Image from "next/image";
import { useEffect } from "react";
import * as SU from "./signup.styles";

export default function SignupPresenter(props: any) {
  useEffect(() => {
    document.addEventListener(
      "keydown",
      function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
        }
      },
      true
    );
  });
  return (
    <SU.Wrapper>
      <Image src="/header/Logo.png" alt="ADFO로고" width="200" height="48" />
      <SU.SignupHeader>회원가입</SU.SignupHeader>

      {/* Radio */}
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        value={props.value}
        onChange={props.handleChange}
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
        {/* Form */}
        <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
          <SU.ImageWrapper>
            <input
              onChange={props.onClick}
              type="file"
              hidden
              ref={props.imgRef}
            />
            <SU.ImageBox
              src={props.preview ? props.preview : "/Profile.png"}
              alt=""
              width={100}
              height={100}
            />
            <SU.Imagebutton onClick={props.onClickUpload}>
              프로필 사진 설정
            </SU.Imagebutton>
          </SU.ImageWrapper>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nickName"
            label="닉네임"
            name="nickName"
            autoComplete="nickName"
            autoFocus
            error={props.formState.errors.nickName?.message ? true : false}
            helperText={props.formState.errors.nickName?.message}
            {...props.register("nickName")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            error={props.formState.errors.email?.message ? true : false}
            helperText={props.formState.errors.email?.message}
            {...props.register("email")}
          />
          {props.formState.errors.email?.messge}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            error={props.formState.errors.password?.message ? true : false}
            helperText={props.formState.errors.password?.message}
            {...props.register("password")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="RePassword"
            label="비밀번호 확인"
            type="password"
            id="RePassword"
            error={props.formState.errors.passwordCheck?.message ? true : false}
            helperText={props.formState.errors.passwordCheck?.message}
            {...props.register("passwordCheck")}
          />
          {/* SNS 체크박스 */}
          {props.value === "인플루언서" ? (
            <Autocomplete
              isOptionEqualToValue={(option, value) => option.id === value.id}
              disablePortal
              id="combo-box-demo"
              options={props.SNS}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  label="대표 SNS"
                  name="UsedSNS"
                  {...props.register("UsedSNS")}
                />
              )}
            />
          ) : (
            <Autocomplete
              isOptionEqualToValue={(option, value) => option.id === value.id}
              disablePortal
              id="combo-box-demo"
              options={props.SNS}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  name="UsedSNS"
                  label="관심 SNS"
                  {...props.register("UsedSNS")}
                />
              )}
            />
          )}
          {props.value === "인플루언서" ? (
            <TextField
              margin="normal"
              fullWidth
              name="SNSLink"
              label="SNS Link"
              type="text"
              id="SNS Link"
              helperText="SNS 링크를 입력해주세요"
              {...props.register("SNSLink")}
            />
          ) : (
            <TextField
              margin="normal"
              fullWidth
              name="SNSLink"
              label="회사링크"
              type="text"
              id="SNS Link"
              helperText="회사링크 입력해주세요"
              {...props.register("SNSLink")}
            />
          )}
          {/* 카테고리 태그 */}
          {props.value === "인플루언서" ? (
            <Autocomplete
              isOptionEqualToValue={(option, value) => option.id === value.id}
              value={props.Cate}
              onChange={(event, newValue) => {
                props.setCate(newValue);
              }}
              multiple
              id="tags-filled"
              options={props.categories.map((option: any) => option.title)}
              freeSolo
              renderTags={(value: string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip
                    variant="filled"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  margin="normal"
                  {...params}
                  variant="outlined"
                  label="관심분야/카테고리"
                  placeholder="Search"
                />
              )}
            />
          ) : (
            <></>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            회원가입
          </Button>
        </form>
      </SU.InfoWrapper>
    </SU.Wrapper>
  );
}
