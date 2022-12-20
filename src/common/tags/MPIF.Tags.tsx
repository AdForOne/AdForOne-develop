import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IPropsTags {
  UserCateGory: string | null;
  register: UseFormRegister<FieldValues>;
  registerName: string;
}
/** UserCateGory: 유저가 회원가입시 선택한 컨텐츠 종류 / register: HookFormRegister / registerName: register로 등록할 임의의 이름 */
export default function Tags(props: IPropsTags) {
  const CategoryTags = [
    { label: "뷰티" },
    { label: "리뷰" },
    { label: "게임" },
    { label: "운동" },
    { label: "IT" },
    { label: "영상편집" },
    { label: "음악" },
  ];

  let DefaultIndex = 3;
  for (let i = 0; i < CategoryTags.length; i++) {
    if (CategoryTags[i].label === props.UserCateGory) {
      DefaultIndex = i;
      break;
    }
  }

  return (
    <Stack spacing={3} sx={{ width: 370, height: 35, marginTop: -3 }}>
      <Autocomplete
        id="tags-standard"
        options={CategoryTags}
        defaultValue={CategoryTags[DefaultIndex]}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="컨텐츠 종류"
            placeholder="관심있는 컨텐츠를 선택해 주세요!"
            {...props.register(props.registerName)}
          />
        )}
      />
    </Stack>
  );
}
