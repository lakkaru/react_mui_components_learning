import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteBorderOutlined } from "@mui/icons-material";


export default function MuiRating() {
  const [value, setValue] = useState(3);
  console.log(value);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
      value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color='error'/>}
        emptyIcon={<FavoriteBorderOutlined fontSize="inherit"/>}
        readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
}
