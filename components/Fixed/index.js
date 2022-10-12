import { Button } from "@mui/material";
import { Fragment } from "react";

const Fixed = () => {
  return (
    <Fragment>
      <Button
        className="fixied-1 font-bold position-fixed fixied-1-posi"
        href="https://t.me/Target_Designer"
        color="blue"
        variant="contained"
        target="_blank"
      >
        ارتباط در تلگرام
      </Button>
      <Button
        className="fixied-2 font-bold position-fixed fixied-2-posi"
        href="https://api.whatsapp.com/send?phone=+989909756978"
        color="green"
        variant="contained"
        target="_blank"
      >
        ارتباط در واتساپ
      </Button>
    </Fragment>
  );
};

export default Fixed;
