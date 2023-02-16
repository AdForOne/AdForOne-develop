import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { FieldValues, UseFormRegister } from "react-hook-form";
interface IPropsTags {
  UserCateGory: string | null | undefined;
  register: UseFormRegister<FieldValues>;
  registerName: string;
}
export default function Tags(props: IPropsTags) {
  const CategoryTags = [
    { label: "Instargram" },
    { label: "FaceBook" },
    { label: "Youtube" },
    { label: "TwitchTv" },
    { label: "AfricaTv" },
  ];

  let DefaultIndex = 3;
  for (let i = 0; i < CategoryTags.length; i++) {
    if (CategoryTags[i].label === props.UserCateGory) {
      DefaultIndex = i;
      break;
    }
  }

  return (
    <Stack spacing={1} sx={{ width: 370, height: 35, marginTop: -3 }}>
      <Autocomplete
        id="tags-standard"
        options={CategoryTags}
        getOptionLabel={(option) => option.label}
        defaultValue={CategoryTags[DefaultIndex]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="관심 SNS"
            placeholder="관심있는 SNS를 선택해 주세요!"
            {...props.register(props.registerName)}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
