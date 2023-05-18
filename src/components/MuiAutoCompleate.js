import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MuiAutoCompleate() {
  const skills = ["HTML", "CSS", "JS", "React", "PHP"];
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState({});
  console.log(skill);

  const skillsOptions = skills.map((value, key) => ({
    id: key + 1,
    label: value,
  }));



  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleSkillChange=(e, newValue)=>{
    setSkill({skill});
  };
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={handleChange}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={handleSkillChange}
      />
    </Stack>
  );
}
