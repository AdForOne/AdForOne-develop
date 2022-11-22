import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

interface IPropsTags {
  UserCateGory: string | null;
}

export default function Tags(props: IPropsTags) {
  const CategoryTags = [
    { label: "뷰티" },
    { label: "리뷰" },
    { label: "게임" },
    { label: "운동" },
    { label: "IT" },
  ];

  return (
    <Stack spacing={3} sx={{ width: 370, height: 35, marginTop: -3 }}>
      <Autocomplete
        multiple
        freeSolo
        id="tags-standard"
        options={CategoryTags}
        defaultValue={[
          {
            label: props.UserCateGory,
          },
        ]}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="관심 SNS"
            placeholder="관심있는 컨텐츠를 선택해 주세요!"
          />
        )}
      />
    </Stack>
  );
}
