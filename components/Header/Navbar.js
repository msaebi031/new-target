import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Link,
  Drawer,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import ContentNavbar from "./Content";

const NavBar = () => {
  const pages = [
    { name: "درباره ما", href: "#Property" },
    { name: "نمونه کار", href: "#Ability" },
    { name: "رزومه افراد", href: "#Awards" },
    { name: "مهارت ها", href: "#Skill" },
    { name: "سفارش پروژه", href: "#OrderProject" },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar className="bg-navbar" position="static" color="transparent">
        <Toolbar>
          {/* Menu Size Xs Uper */}
          <Box
            display={{ xs: "flex", md: "none" }}
            className="justify-between align-end w-100"
          >
            <Box>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => handleOpen()}
                color="inherit"
                className="borderMenu z-index"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box>
              <Box
                component="img"
                src={"/img/logo.png"}
                alt="لوگو"
                className="widthLogo styleLogoXs"
              />
            </Box>
          </Box>
          {/* Menu Size Xs Uper */}

          {/* Menu Size Md Uper */}
          <Box
            display={{ xs: "none", md: "flex" }}
            className="justify-between w-100 z-index"
            alignItems="center"
          >
            <Box className="d-flex justify-between">
              {pages.map((page, index) => (
                <MenuItem key={index}>
                  <Link
                    href={page.href}
                    className="navbar-hover"
                    color="light.light"
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Box>

            {/* <Link href="#"> */}
            <Box
              component="img"
              src={"/img/logo.png"}
              alt="لوگو"
              className="widthLogo"
            />
            {/* </Link> */}
          </Box>
          {/* Menu Size Md Uper */}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => handleOpen()}
        PaperProps={{
          sx: {
            backgroundColor: "dark.main",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="temporary"
      >
        <ContentNavbar pages={pages} handleOpen={() => handleOpen()} />
      </Drawer>
    </>
  );
};
export default NavBar;
