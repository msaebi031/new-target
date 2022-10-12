import { Avatar, Box, Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
const Member = () => {
  const items = [
    {
      name: "علی اکبر اسماعیلی",
      p: "طراح و توسعه دهنده وب با ۲ سال فعالیت در این زمینه",
      src: "/img/menber/sibil.png",
      adress: "https://aliakbar.target-designer.com/",
    },
    {
      name: "محمد مهدی صائبی",
      p: "طراح و توسعه دهنده وب با ۲ سال فعالیت در این زمینه",
      src: "/img/menber/sibil.png",
      adress: "https://artan.target-designer.com/",
      pt: 13,
    },
  ];
  return (
    <Box mt={{ xs: 10, md: 13 }} id="Awards">
      <Grid2 spacing={{ xs: 0, sm: 5, md: 7, lg: 15 }} container>
        {items.map((item, index) => (
          <Grid2 mt={{ xs: 4, md: item.pt }} item xs={12} sm={6} key={index}>
            <Box
              py={4}
              px={2}
              className="d-flex align-center border-box bg-dark"
            >
              <Avatar
                sx={{ height: "105px", width: "105px", ml: 2.5 }}
                src={item.src}
                alt={item.name}
                className="img-border"
              />
              <Box>
                <Typography
                  component="h2"
                  color="light.main"
                  variant="body1"
                  className="font-bold"
                >
                  {item.name}
                </Typography>
                <Typography
                  pb={2.2}
                  pt={1}
                  component="p"
                  color="light.light"
                  variant="body2"
                  className="font-light"
                >
                  {item.p}
                </Typography>
                <Button
                  sx={{ color: "light.main" }}
                  size="small"
                  color="success"
                  variant="contained"
                  href={item.adress}
                  target="_blank"
                >
                  مشاهده رزومه
                </Button>
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Member;
