import { Box, Button, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Nemone = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/works/selectAllWorks")
      .then(function (response) {
        // handle
        setItems(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Grid container>
      {items.map((item, index) => (
        <Grid item xs={12} md={6} key={index} p={{ xs: 2, sm: 7 }}>
          <Box pt={{ xs: 0, md: item.pt }}>
            <Box className="nemone-container">
              <Box
                component="img"
                src={`/img/work/${item.name}.png`}
                alt={item.name}
                className="w-100 img-border nemone-image"
              />
              <Box className="nemone-middle">
                <Button
                  className="font-light"
                  sx={{ color: "light.main" }}
                  size="large"
                  color="success"
                  variant="contained"
                  href={item.url}
                  target="_blank"
                >
                  {item.name}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Nemone;
