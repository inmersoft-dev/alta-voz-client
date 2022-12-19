/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Button, Typography } from "@mui/material";

// @mui/icons-material
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

// sito components
import SitoImage from "sito-image";

// components
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";
import { useNotification } from "../../../context/NotificationProvider";

// test
import { artists } from "../../../data/data";

// images
import noPhoto from "../../../assets/images/noPhoto.png";

const Artists = () => {
  const theme = useTheme();
  const location = useLocation();

  const { setNotificationState } = useNotification();
  const { languageState } = useLanguage();

  const [cArtist, setCArtist] = useState({});

  const showNotification = (ntype, message) =>
    setNotificationState({
      type: "set",
      ntype,
      message,
    });

  const fetch = async (artist) => {
    try {
      const rArtist = artists.find((item) => item.id === artist);
      console.log(rArtist);
      // const response =
    } catch (err) {
      console.error(err);
      showNotification("error", String(err));
    }
  };

  useEffect(() => {
    const { search } = location;
    const params = search.substring(1).split("&");
    params.forEach((item) => {
      const [paramName, paramValue] = item.split("=");
      if (paramName === "id" && paramValue) fetch(paramValue);
    });
  }, [location]);

  return (
    <Box
      sx={{
        gap: "20px",
        display: "flex",
        height: "60vh",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        padding: {
          xl: "40px 5rem",
          lg: "40px 4rem",
          xs: "40px 20px",
        },
        background: theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: { sm: "25%", lg: 1 },
            display: { xs: "none", sm: "inherit" },
          }}
        >
          <SitoImage
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.5)",
            }}
            src={
              cArtist.photo ||
              `https://xsgames.co/randomusers/assets/avatars/${
                Math.floor(Math.random() * 10) % 2 === 0 ? "male" : "female"
              }/0.jpg`
            }
            alt={cArtist.name}
          />
        </Box>
        <Box sx={{ flex: { xs: 1, sm: "1 1 50%", lg: 1 } }}>
          <SitoImage
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={
              cArtist.photo ||
              `https://xsgames.co/randomusers/assets/avatars/${
                Math.floor(Math.random() * 10) % 2 === 0 ? "male" : "female"
              }/0.jpg`
            }
            alt={cArtist.name}
          />
        </Box>
        <Box
          sx={{
            flex: { sm: "25%", lg: 1 },
            display: { xs: "none", sm: "inherit" },
          }}
        >
          <SitoImage
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.5)",
            }}
            src={
              cArtist.photo ||
              `https://xsgames.co/randomusers/assets/avatars/${
                Math.floor(Math.random() * 10) % 2 === 0 ? "male" : "female"
              }/0.jpg`
            }
            alt={cArtist.name}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
          background: "linear-gradient(0deg, black, transparent)",
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "0 40px",
          gap: "40px",
          zIndex: 1,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        <Typography variant="h3">{artists[0].name}</Typography>
        <Typography>{artists[0].biography.substring(0, 50)}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" sx={{ gap: "5px" }}>
              <PlayArrowIcon sx={{ marginTop: "1px" }} />
              {languageState.texts.Artist.Hero.Play}
            </Button>
            <Button variant="outlined" sx={{ gap: "5px" }}>
              <ShuffleIcon sx={{ marginTop: "1px" }} />
              {languageState.texts.Artist.Hero.Shuffle}
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button sx={{ display: "flex", flexDirection: "column" }}>
              <BookmarkIcon />
              <Typography>{languageState.texts.Artist.Hero.Follow}</Typography>
            </Button>
            <Button sx={{ display: "flex", flexDirection: "column" }}>
              <InfoOutlinedIcon />
              <Typography>{languageState.texts.Artist.Hero.Info}</Typography>
            </Button>
            <Button sx={{ display: "flex", flexDirection: "column" }}>
              <PodcastsOutlinedIcon />
              <Typography>{languageState.texts.Artist.Hero.Radio}</Typography>
            </Button>
            <Button sx={{ display: "flex", flexDirection: "column" }}>
              <ShareOutlinedIcon />
              <Typography>{languageState.texts.Artist.Hero.Share}</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Artists;
