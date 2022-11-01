import { Button, Grid, Link, TextField } from "@mui/material";
import Image from "next/image";
import * as LS from "./login.styles";

export default function LoginPresenter() {
  return (
    <LS.Wrapper>
      <Grid container component="main" sx={{ height: "100vh" }}>
        {/* 로그인 옆에 이미지 랜덤생성 */}
        <Grid
          item
          // mui breakpoint 기준 xs 이면 이미지는 false(없어짐)
          // Grid 는 12를 기준으로 해서 sm :4, md :7로 설정.
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* 로그인 화면 */}
        <Grid item xs={12} sm={8} md={5}>
          {/* Grid xs때는 이미지 없어지니까 12로 기준설정  */}
          <LS.LoginWrapper>
            <Image
              alt="로그인화면 로고"
              width="64"
              height="64"
              src="/Profil.png"
            ></Image>
            <LS.LoginHeader>로그인</LS.LoginHeader>
            <TextField
              // error // 에러
              margin="normal" // 마진 mui
              required // 필수값
              fullWidth // 꽉 가로
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

            {/* Link */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  비밀번호 찾기
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"회원가입"}
                </Link>
              </Grid>
            </Grid>

            {/* 버튼에 mt, mb 마진값 */}
            <Button variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
              로그인 하기
            </Button>

            <LS.LoginLabel>
              © AD For One, Inc. 2022. We love our users!
            </LS.LoginLabel>
          </LS.LoginWrapper>
        </Grid>
      </Grid>
    </LS.Wrapper>
  );
}
