import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export default function MuiCard() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component={'img'} height={'140px'} image="https://source.unsplash.com/random" alt='unplash image'></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            React
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            To change the border radius of a Paper component in Material-UI
            (MUI), you can use the classes prop and override the CSS classes
            associated with the Paper component. Here's an example of how you
            can achieve this:
          </Typography>
         
        </CardContent>
        <CardActions>
            <Button>Share</Button>
            <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
