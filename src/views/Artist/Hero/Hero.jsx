import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Button, Typography } from "@mui/material";

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
        marginRight: "-50px",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        padding: {
          xl: "40px 0 40px 0",
          xs: "40px 0 40px 0",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "0 40px",
          background:,
        }}
      >
        <Box sx={{ width: "270px", height: "270px", marginBottom: "-40px" }}>
          <SitoImage
            sx={{ width: "100%", height: "100%", borderRadius: "100%" }}
            src={
              cArtist.photo ||
              `https://xsgames.co/randomusers/assets/avatars/${
                Math.floor(Math.random() * 10) % 2 === 0 ? "male" : "female"
              }/${index}.jpg`
            }
            alt={cArtist.name}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Artists;
