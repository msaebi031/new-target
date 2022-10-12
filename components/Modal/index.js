import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Modals = ({ open, handleOpen }) => {
  return (
    <Modal
      open={open}
      onClose={() => handleOpen()}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className="style-modal" sx={{ width: { xs: "80%", md: "40%" } }}>
        <Box display="flex" alignItems="center" p={2}>
          <Typography component="p" className="font-bold" flexGrow="1">
            ثبت سفارش
          </Typography>
          <IconButton onClick={() => handleOpen()}>
            <CloseRoundedIcon color="error" />
          </IconButton>
        </Box>
        <Divider className="divider-bg" />

          <Typography textAlign="center" mt={2.5} component="p" variant="body2" color="dark.light" pb={2}>
            جهت ثبت سفارش در یکی از سوشال مدیا ها با ما در ارتباط باشید.
          </Typography>
        <Box mb={3} textAlign="center" display={{xs:"grid" ,sm:"flex"}} justifyContent="center">
          <Button
            className="fixied-1 font-bold"
            href="https://t.me/Target_Designer"
            color="blue"
            variant="contained"
            sx={{ ml:{xs:0,sm:2}}}
            target="_blank"
          >
            ارتباط در تلگرام
          </Button>
          <Button
          sx={{mt:{xs:1.6,sm:0}}}
            className="fixied-2 font-bold"
            href="https://api.whatsapp.com/send?phone=+989909756978"
            color="green"
            variant="contained"
            target="_blank"
          >
            ارتباط در واتساپ
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Modals;
