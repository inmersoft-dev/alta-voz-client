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
import ArtistCard from "../../../components/ArtistCard/ArtistCard";

// image
import branding from "../../../assets/images/branding.jpeg";
import sphere from "../../../assets/images/sphere.png";

const Hero = () => {
  const { languageState } = useLanguage();

  return (
    <Box
      id="hero"
      sx={{
        gap: "20px",
        display: "flex",
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
          display: "center",
          div: { height: "100%" },
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
        id="carousel"
      >
        <Typography>LOGO</Typography>
        <img
          src={sphere}
          alt="sphere"
          className={css({
            position: "absolute",
            width: "110px",
            height: "110px",
            top: "-50px",
            left: "20px",
          })}
        />
        <img
          src={sphere}
          alt="sphere"
          className={css({
            position: "absolute",
            width: "500px",
            right: "20px",
          })}
        />
        <img
          src={sphere}
          alt="sphere"
          className={css({
            position: "absolute",
            width: "750px",
            right: "-190px",
            bottom: "-450px",
          })}
        />

        {/* <Carousel>
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
                  key={item.id}
                  delay={`0.${i + 1}s`}
                  sx={{ height: "260px !important" }}
                >
                  <ArtistCard item={item} />
                </InViewComponent>
              ))}
            </Box>
          ))}
              </Carousel> */}
      </Box>
    </Box>
  );
};

export default Hero;
