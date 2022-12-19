/* eslint-disable no-unused-vars */
import { useRef, useReducer } from "react";
import PropTypes from "prop-types";

// framer-motion
import { useInView } from "framer-motion";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, IconButton } from "@mui/material";

// @mui/icons-material
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// sito-components
import SitoImage from "sito-image";

// components
import InViewComponent from "../InViewComponent/InViewComponent";

// texts
import { useLanguage } from "../../context/LanguageProvider";

// test
import { songs, artists, albums } from "../../data/data";

const SongList = (props) => {
  const { filter, count, childSx, component, sx } = props;

  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <table className={css({ width: "100%" })}>
        <tr>
          <th className={css({ textAlign: "left", paddingLeft: "60px" })}>
            {languageState.texts.ListComponent.Title}
          </th>
          <th className={css({ textAlign: "left" })}>
            {languageState.texts.ListComponent.Artist}
          </th>
          <th className={css({ textAlign: "left" })}>
            {languageState.texts.ListComponent.Album}
          </th>
          <th>{languageState.texts.ListComponent.Time}</th>
          <th className={css({ textAlign: "left" })}></th>
        </tr>
        {songs.slice(0, count).map((item, i) => (
          <tr>
            <td
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "10px",
                position: "relative",
              })}
            >
              <Box sx={{ position: "relative" }}>
                <SitoImage
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                  src={
                    item.photo ||
                    `https://loremflickr.com/320/240/${
                      ["brazil", "paris", "canada"][
                        Math.floor(Math.random() * 3)
                      ]
                    }/all?lock=${i}`
                  }
                  alt={item.id}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 20,
                    background: "#00000091",
                    opacity: 0,
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "all 500ms ease",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <PlayCircleFilledWhiteIcon
                    color="primary"
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                </Box>
              </Box>
              {item.name}
            </td>
            <td>{artists[i].name}</td>
            <td>{albums[item.albumId].name}</td>
            <td className={css({ textAlign: "center" })}>
              {item.time || "3:15"}
            </td>
            <td>
              <IconButton color="primary">
                <PlaylistAddIcon />
              </IconButton>
              <IconButton color="primary">
                <FavoriteBorderIcon />
              </IconButton>
            </td>
          </tr>
        ))}
      </table>
    </Box>
  );
};

export default SongList;
