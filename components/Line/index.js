import { Box, Divider } from "@mui/material";

const Line = ({ zIndex, height }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      zIndex={zIndex}
      height={height}
      className={
        zIndex == 1
          ? "w-100 absolute right-0 line"
          : "w-100 absolute right-0 line-true"
      }
    >
      <Divider
        orientation="vertical"
        sx={{
          margin: { xs: "0 auto", sm: "0" },
          marginRight: { sm: "105px" },
        }}
        className="witdh-divider"
      />
      <Divider
        orientation="vertical"
        className="witdh-divider"
        sx={{ display: { xs: "none", md: "block" } }}
      />
      <Divider
        orientation="vertical"
        className="witdh-divider"
        sx={{ display: { xs: "none", md: "block" } }}
      />
      <Divider
        orientation="vertical"
        className="witdh-divider"
        sx={{
          marginLeft: { xs: "48px", sm: "105px" },
          display: { xs: "none", sm: "block" },
        }}
      />
    </Box>
  );
};

export default Line;
