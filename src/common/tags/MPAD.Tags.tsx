import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
interface IPropsTags {
  UserCateGory: string | null | undefined;
}
export default function Tags(props: IPropsTags) {
  const CategoryTags = [
    { label: "Instargram" },
    { label: "FaceBook" },
    { label: "Youtube" },
    { label: "TwitchTv" },
    { label: "AfricaTv" },
  ];

  return (
    <Stack spacing={3} sx={{ width: 370, height: 35, marginTop: -3 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={CategoryTags}
        getOptionLabel={(option) => option.label}
        defaultValue={[
          {
            label: props.UserCateGory,
          },
        ]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="관심 SNS"
            placeholder="관심있는 SNS를 선택해 주세요!"
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
