import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Modals from "../Modal";

const ProjectOrder = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Box className="border-box bg-dark" my={14} id="OrderProject">
      <Grid
        className="d-flex justify-center"
        container
        textAlign={{ xs: "center", md: "right" }}
        spacing={{ md: 3, lg: 4 }}
        p={4}
      >
        <Grid mt={{ xs: 4, md: 0 }} item xs={10} sm={8} md={6}>
          <Box
            component="img"
            src={"/img/projectorde.png"}
            alt="سفارش پروژه"
            className="w-100"
          />
        </Grid>
        <Grid mt={{ md: 0, lg: 4 }} item xs={12} md={6}>
          <Typography
            component="h3"
            className="font-bold"
            color="light.main"
            variant="h5"
            py={2}
          >
            سفارش پروژه
          </Typography>
          <Typography
            component="p"
            color="light.light"
            variant="body2"
            className="font-light"
          >
            اگر مایل هستید که با این تیم با قدرتمند و کاملا حرفه ای کار کنید و
            پروژه های خود را به آنها واگذار کنید فقط کافیت دکمه سفارش پروژه را
            کلیک کرده و از راه های ارتباطی تلگرام یا واتساپ با تیم ما در ارتباط
            باشید و مشاوره رایگان بگیرید. توجه کنید که تیم ما غیر از واتساپ و
            تلگرام سوشال مدیای فعال دیگه ای ندارد و این 2 اپلیکیشن به منظور
            راحتی ارتباط شما با تیم ما لحاظ شده است
          </Typography>
          <Box mt={3}>
            <Button
              sx={{ color: "light.main" }}
              color="success"
              variant="contained"
              onClick={() => handleOpen()}
            >
              سفارش پروژه
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Modals open={open} handleOpen={() => handleOpen()} />
    </Box>
  );
};

export default ProjectOrder;
