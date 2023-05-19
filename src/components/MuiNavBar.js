import { CatchingPokemonOutlined } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function MuiNavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonOutlined />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PokemonApp
        </Typography>
        <Stack direction={'row'} spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
