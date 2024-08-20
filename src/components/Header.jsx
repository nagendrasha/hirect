"use client";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const drawerWidth = 240;

const navItems = ["Homes", "Recruiters", "Job Seekers"];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Image src={logo} width="100px" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "white" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { lg: "100px" } }}>
              <Image src={logo} alt="hirect" width="100%" />
            </Box>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <Box sx={{ border: "1px solid #2ce2a2", padding: "3px" }}>
                <MenuIcon sx={{ fontSize: "30px" }} />
              </Box>
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block", lg: "flex" } }}>
              <ul className="nav-item">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/connect">Recruiters</Link>
                </li>
                <li>
                  <Link href="/jobs">Job Seekers</Link>
                </li>
              </ul>
              <Box sx={{ display: "flex", mt:'10px',mb:'10px' }}>
                <Button
                  sx={{
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    border: "1px solid #2ce2a2",
                    color: "black",
                    padding: "5px 15px", // Adjust padding to decrease height
                    fontSize: "14px", // Adjust font size if needed
                  }}
                  variant="outlined"
                >
                  Recruiter Login
                </Button>
                <Button
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "#2ce2a2",
                    color: "black",
                    textTransform: "capitalize",
                    ml: "20px",
                    padding: "5px 15px", // Adjust padding to decrease height
                    fontSize: "14px", // Adjust font size if needed
                  }}
                  variant="contained"
                >
                  Download App
                </Button>

                <IconButton
                  color="black"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 2 }}
                >
                  { }
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
