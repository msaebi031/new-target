import { Box, Container } from "@mui/material";
import Line from "../Line";
import Headers from "./Header";
import NavBar from "./Navbar";

const Header = () => {
  return (
    <Box className="bg-header" sx={{ height: { xs: "100vh", md: "80vh" } }}>
      <Container maxWidth="xl">
        <Line zIndex="1" height="80vh" />
        <NavBar />
        <Headers />
      </Container>
    </Box>
  );
};

export default Header;
