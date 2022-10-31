import Image from "next/image";
import * as S from "./footer.styles";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

export default function FooterPresenter(props) {
  return (
    <S.Outline>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleCloseGitHub}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 700,
        }}
      >
        <Fade in={props.open}>
          <Box sx={props.GitHubModalStyle}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              color="#18a0fb"
            >
              제작자 GitHub
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <S.GitHubWrapper>
                <S.GitHubLink href="https://github.com/KMS9612" target="blank">
                  KMS(김민승)
                </S.GitHubLink>
                <br />
                <S.GitHubLink
                  href="https://github.com/Jae-hong-lee"
                  target="blank"
                >
                  LJH(이재홍)
                </S.GitHubLink>
              </S.GitHubWrapper>
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <S.Logo>
        <Image
          src="/header/Logo.png"
          alt="웹페이지 하단 ADFO로고"
          width="130"
          height="30"
        ></Image>
      </S.Logo>
      <S.MiddleText>ⓒKMS,LJH의 포트폴리오입니다.</S.MiddleText>
      <S.LinkWrapper>
        <S.LinkText onClick={props.handleOpenGitHub}>GitHub</S.LinkText>
        <S.LinkText>Notion</S.LinkText>
      </S.LinkWrapper>
    </S.Outline>
  );
}
