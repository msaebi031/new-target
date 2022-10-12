import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import Nemone from "./Nemone";

const Work = () => {
  return (
    <Fragment>
      <Box className="border-box bg-dark" id="Ability">
        <Box textAlign="center">
          <Typography
            component="h3"
            className="font-bold"
            color="light.main"
            variant="h5"
            pt={3}
          >
            نمونه کار ها
          </Typography>
          <Typography
            component="p"
            color="light.light"
            variant="body2"
            className="font-light"
            pb={2}
            pt={1.6}
          >
            نمونه کار های گروه تارگت دیزاینر
          </Typography>
        </Box>
      </Box>
      <Box className="border-work" mb={14}>
        <Nemone />
      </Box>
    </Fragment>
  );
};

export default Work;
