import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Typography, Button } from "@mui/material";

// @mui/icons-material
import CloseIcon from "@mui/icons-material/Close";

// react-cool-onclickoutside
import useOnclickOutside from "react-cool-onclickoutside";

// sito container
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// context
import { useLanguage } from "../../context/LanguageProvider";

// images
// import logoHorizontal from "../../assets/images/logo-horizontal.png";

const NavigationDrawer = (props) => {
  const { open, handleClose } = props;

  const theme = useTheme();

  const { languageState } = useLanguage();

  const ref = useOnclickOutside(() => {
    handleClose();
  });

  return (
    <SitoContainer
      flexDirection="column"
      sx={{
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        transition: "all 500ms ease",
        opacity: open ? 1 : 0,
        zIndex: open ? 99 : -1,
        background: "#72727285",
        backdropFilter: "blur(4px)",
      }}
    >
      <SitoContainer
        ref={ref}
        flexDirection="column"
        sx={{
          width: "300px",
          height: "100%",
          position: "relative",
          padding: "10px 20px",
          transition: "all 500ms ease",
          background: theme.palette.background.paper,
          transform: open ? "translateX(0)" : "translateX(-350px)",
        }}
      >
        <Button
          onClick={handleClose}
          color="error"
          sx={{
            width: "40px",
            height: "40px",
            minHeight: 0,
            minWidth: 0,
            padding: 0,
            borderRadius: "100%",
            position: "absolute",
            right: "10px",
          }}
        >
          <CloseIcon />
        </Button>
        <Link to="/" className={css({ marginTop: "50px" })}>
          LOGO
          {/* <SitoImage
            src={logoHorizontal}
            alt="logo"
            sx={{ width: "200px", height: "55px", filter: "grayscale(1)" }}
          /> */}
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            gap: "20px",
          }}
        >
          {languageState.texts.Navbar.Links.map((item) => (
            <Link key={item.to} to={item.to}>
              <Typography color="primary">{item.label}</Typography>
            </Link>
          ))}
        </Box>
      </SitoContainer>
    </SitoContainer>
  );
};

NavigationDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default NavigationDrawer;
