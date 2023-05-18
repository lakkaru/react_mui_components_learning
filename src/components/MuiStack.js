import { Box, Stack , Divider} from '@mui/material'
import React from 'react'

export default function MuiStack() {
  return (
    <Stack sx={{
        border:'1px solid'
    }} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
      <Box
        //   component="span"
        sx={{
          bgcolor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            cursor: "pointer",
            bgcolor: "primary.light",
          },
        }}
      >
        Lakkaru
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="error.light"
        p={2}
      ></Box>
    </Stack>
  )
}
