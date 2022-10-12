import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <Box className="border-box bg-dark" my={14} id="Property">
        <Grid
          className="d-flex justify-center"
          container
          textAlign={{ xs: "center", md: "right" }}
          spacing={{ md: 3, lg: 4 }}
          p={4}
        >
          <Grid mt={{ md: 2, lg: 4 }} item xs={12} md={6}>
            <Typography
              component="h3"
              className="font-bold"
              color="light.main"
              variant="h5"
              py={2}
            >
              درباره ما
            </Typography>
            <Typography
              component="p"
              color="light.light"
              variant="body2"
              className="font-light"
            >
              گروه برنامه نویسی تارگت دیزاینر در سال 1400 تاسیس شد و ابتدا کار
              خود را با طراحی وب آغاز نمود.رفته رفته با کمک دوستان تواسنتیم تیم
              را گسترس داده و در زمینه های مختلف اقدام به کار کنیم، حال با گذشت
              چندین سال توانسته ایم تیم کاملا حرفه ای را در زمینه طراحی سایت جمع
              کنیم تا بتونیم بهترین پروژه ها را خدمت مشتریان عرضه کنیم.تیم فعال
              ما بیشتر از 20 ها سایت در رتبه های 1تا 10 گوگل در موضوعات مختلف
              طراحی و ساخته است و همیشه در خدمت شما عزیزان است که هر مدل سایتی
              که مد نظر شماست را طراحی و با بهترین کیفیت تحویلتان دهد.
            </Typography>
          </Grid>
          <Grid mt={{ xs: 4, md: 0 }} item xs={10} sm={8} md={6}>
            <Box
              component="img"
              src={"/img/about.png"}
              alt="درباره ما"
              className="w-100"
            />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default About;
