import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography } from "@mui/material";

// components
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";
import { useMode } from "../../../context/ModeProvider";

const Hero = () => {
  const { modeState } = useMode();
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        gap: "20px",
        display: "flex",
        paddingBottom: "",
        height: "calc(100vh - 70px)",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { md: "flex-end", xs: "flex-start" },
        justifyContent: { md: "flex-start", xs: "center" },
        padding: {
          xl: "20px 5rem 100px 5rem",
          lg: "20px 5rem 100px 4rem",
          xs: "20px",
        },
      }}
    ></Box>
  );
};

export default Hero;
