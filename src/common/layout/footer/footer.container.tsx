import { useState } from "react";
import FooterPresenter from "./footer.presenter";

export default function FooterContainer() {
  const [open, setOpen] = useState(false);
  const handleOpenGitHub = () => setOpen(true);
  const handleCloseGitHub = () => setOpen(false);

  const GitHubModalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <FooterPresenter
      GitHubModalStyle={GitHubModalStyle}
      open={open}
      handleOpenGitHub={handleOpenGitHub}
      handleCloseGitHub={handleCloseGitHub}
    />
  );
}
