import { useState } from "react";
import { Link } from "react-router-dom";

// @mui/material
import {
  Box,
  Divider,
  Link as MUILink,
  Typography,
  Button,
} from "@mui/material";

// @mui/icons-material
import MenuIcon from "@mui/icons-material/Menu";

// sito components
import SitoImage from "sito-image";

// components
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";

// contexts
import { useMode } from "../../context/ModeProvider";
import { useLanguage } from "../../context/LanguageProvider";

// images
// import logoHorizontal from "../../assets/images/logo-horizontal.png";

const Navbar = () => {
  const { modeState } = useMode();
  const { languageState } = useLanguage();

  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      sx={{
        display: "flex",
        padding: { xl: "20px 5rem", lg: "20px 4rem", xs: "20px" },
        img: {
          filter: modeState.mode === "light" ? "none" : "invert(1)",
        },
      }}
    >
      <Link to="/">
        LOGO
        {/* <SitoImage
          src={logoHorizontal}
          alt="logo"
          sx={{
            width: "200px",
            height: "55px",
            filter: "grayscale(1)",
          }}
        /> */}
      </Link>
      <Box sx={{ gap: "30px", display: { xs: "none", md: "flex" } }}>
        {languageState.texts.Navbar.Links.map((item) => (
          <Link key={item.to} to={item.to}>
            <Typography color="primary" variant="caption">
              {item.label}
            </Typography>
          </Link>
        ))}
      </Box>
      <Button
        onClick={() => setShowDrawer(true)}
        variant="contained"
        sx={{
          display: { xs: "inherit", md: "none" },
          width: "40px",
          height: "40px",
          minHeight: 0,
          minWidth: 0,
          padding: 0,
          borderRadius: "100%",
        }}
      >
        <MenuIcon />
      </Button>
      <NavigationDrawer
        open={showDrawer}
        handleClose={() => setShowDrawer(false)}
      />
    </Box>
  );
};

export default Navbar;
