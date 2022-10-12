import { Favorite } from "@mui/icons-material";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box py={3} className="border-box bg-dark text-center">
      <Typography
        className="font-bold"
        variant="body1"
        component="h2"
        color="light.main"
        pb={1}
      >
        طراحی شده با <Favorite color="error" /> توسط{" "}
        <Link color="success.main" href="#">
          تارگت دیزاینر
        </Link>
      </Typography>
      <Typography variant="body2" component="p" color="light.light" px={2}>
        &copy; تمامی حقوق مادی ومعنوی این سایت متعلق به گروه تارگت دیزاینر می
        باشد .
      </Typography>
    </Box>
  );
};

export default Footer;
