import SignupPresenter from "./signup.presenter";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function SignupContainer() {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const SNS = [
    { label: "Instargram" },
    { label: "FaceBook" },
    { label: "Youtube" },
    { label: "AfreecaTV" },
    { label: "TwitchTV" },
  ];

  const categories = [
    { title: "음악" },
    { title: "영상편집" },
    { title: "IT" },
  ];

  return (
    <SignupPresenter
      categories={categories}
      SNS={SNS}
      icon={icon}
      checkedIcon={checkedIcon}
    />
  );
}
