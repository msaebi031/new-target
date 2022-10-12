import { Box, Button, Divider, Typography } from "@mui/material";

const ContentNavbar = ({ pages, handleOpen }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box p={4} textAlign="center">
          <Typography color="light.main" variant="h6" component="h2">
            تارگت دیزاینر | Target Designer
          </Typography>
        </Box>
        <Divider />
        <Box>
          {pages.map((item, index) => (
            <Button
              key={index}
              href={item.href}
              component="a"
              disableRipple
              onClick={() => handleOpen()}
              sx={{
                borderRadius: 1,
                color: "light.light",
                fontWeight: "500",
                justifyContent: "flex-start",
                px: 3,
                py: 1.2,
                textTransform: "none",
                width: "100%",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255, 0.08)",
                  color: "light.main",
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ContentNavbar;
