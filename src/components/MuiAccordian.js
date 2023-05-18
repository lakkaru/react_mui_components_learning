import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MuiAccordian() {
  const [expanded, setExpapnded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpapnded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary id="pannel1-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ipsum consectetur cupidatat aliquip pariatur commodo nulla et
            deserunt laborum aliquip deserunt est Lorem. Lorem cupidatat nostrud
            proident amet. Sit commodo cupidatat proident do eu occaecat laboris
            fugiat. Irure dolor ex sunt cillum qui enim excepteur mollit
            deserunt. Commodo mollit dolor voluptate tempor proident quis
            proident adipisicing sit eiusmod culpa. Aliquip id ipsum non ipsum
            et consequat voluptate laborum exercitation enim nostrud nisi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary id="pannel2-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ipsum consectetur cupidatat aliquip pariatur commodo nulla et
            deserunt laborum aliquip deserunt est Lorem. Lorem cupidatat nostrud
            proident amet. Sit commodo cupidatat proident do eu occaecat laboris
            fugiat. Irure dolor ex sunt cillum qui enim excepteur mollit
            deserunt. Commodo mollit dolor voluptate tempor proident quis
            proident adipisicing sit eiusmod culpa. Aliquip id ipsum non ipsum
            et consequat voluptate laborum exercitation enim nostrud nisi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary id="pannel2-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ipsum consectetur cupidatat aliquip pariatur commodo nulla et
            deserunt laborum aliquip deserunt est Lorem. Lorem cupidatat nostrud
            proident amet. Sit commodo cupidatat proident do eu occaecat laboris
            fugiat. Irure dolor ex sunt cillum qui enim excepteur mollit
            deserunt. Commodo mollit dolor voluptate tempor proident quis
            proident adipisicing sit eiusmod culpa. Aliquip id ipsum non ipsum
            et consequat voluptate laborum exercitation enim nostrud nisi.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
