import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Carousel from "react-material-ui-carousel";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography, Item } from "@mui/material";

// sito-components
import SitoImage from "sito-image";

// components
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// images
import hero from "../../../assets/images/hero";

// test
import { artists } from "../../../data/data";

// images
import noPhoto from "../../../assets/images/noPhoto.png";

const Hero = () => {
  const { languageState } = useLanguage();

  return (
    <Box
      id="hero"
      sx={{
        gap: "20px",
        display: "flex",
        paddingBottom: "",
        height: "calc(100vh - 80px)",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { md: "flex-end", xs: "flex-start" },
        justifyContent: { md: "flex-start", xs: "center" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          div: { height: "100%" },
        }}
        id="carousel"
      >
        <Carousel>
          {Object.values(hero).map((item, i) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "30px",
                width: "100%",
                height: "100%",
                backgroundImage: `url('${item}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
              key={i}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  background: "#222222b5",
                }}
              />
              {artists.slice(0, 3).map((item, i) => (
                <InViewComponent
                  delay={`0.${i + 1}s`}
                  sx={{ height: "260px !important" }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="10px"
                    sx={{ height: "260px !important" }}
                  >
                    <SitoImage
                      sx={{
                        width: "200px",
                        height: "200px !important",
                        borderRadius: "100%",
                      }}
                      src={item.photo || noPhoto}
                      alt={item.id}
                    />
                    <Typography>{item.name}</Typography>
                  </Box>
                </InViewComponent>
              ))}
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Hero;
