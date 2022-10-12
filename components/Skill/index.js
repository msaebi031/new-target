import { Box, Grid, Typography } from "@mui/material";
import { Line } from "rc-progress";

const Skill = () => {
  const items = [
    {
      name: "CSS",
      title: "85%",
      percent: 85,
    },
    {
      name: "HTML",
      title: "89%",
      percent: 89,
    },
    {
      name: "TYPESCRIPT",
      title: "90%",
      percent: 90,
    },
    {
      name: "SASS",
      title: "90%",
      percent: 90,
    },
    {
      name: "REACT JS",
      title: "89%",
      percent: 89,
    },
    {
      name: "JAVASCRIPT",
      title: "83%",
      percent: 83,
    },
    {
      name: "NODE JS",
      title: "42%",
      percent: 42,
    },
    {
      id: 8,
      name: "NEXT JS",
      title: "83%",
      percent: 83,
    },
    {
      name: "BOOTSTRAP",
      title: "93%",
      percent: 93,
    },
    {
      name: "MATERYAL UI",
      title: "93%",
      percent: 93,
    },
    {
      name: "UX",
      title: "89%",
      percent: 89,
    },
    {
      name: "UI",
      title: "88%",
      percent: 88,
    },
  ];
  return (
    <Box className="border-box bg-dark" id="Skill">
      <Box textAlign="center">
        <Typography
          component="h3"
          className="font-bold"
          color="light.main"
          variant="h5"
          pt={3}
          pb={2}
        >
          مهارت ها
        </Typography>
      </Box>

      <Grid container spacing={{ sx: 0, sm: 3 }} px={3} py={2}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  className="font-light"
                  variant="body1"
                  color="light.light"
                  component="span"
                >
                  {item.name}
                </Typography>
                <Typography
                  className="font-light"
                  variant="body1"
                  fontWeight={600}
                  color="light.main"
                  component="span"
                >
                  {item.title}
                </Typography>
              </Box>
              <Line
                percent={item.percent}
                strokeWidth="1.3"
                trailWidth="1.2"
                strokeColor="#009981"
                trailColor="#6C757D"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skill;
