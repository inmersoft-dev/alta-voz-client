/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Typography, IconButton, Slider } from "@mui/material";

// @mui/icons-material
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

// sito components
import SitoImage from "sito-image";

// data
import { artists, genres } from "../../data/data";

const SongCard = (props) => {
  const theme = useTheme();
  const { item, index, sx, imgSx, control } = props;

  const [state, setState] = useState(false);
  const [songTrack, setSongTrack] = useState(40);

  return (
    <Box
      component={control ? "div" : "a"}
      href={control ? "" : `/details?type=song&id=${item.id}`}
      className={css({ color: "inherit", textDecoration: "none" })}
    >
      <Box
        gap="5px"
        display="flex"
        flexDirection="column"
        sx={{ alignItems: "center", justifyContent: "center", ...sx }}
      >
        <Box
          sx={{
            position: "relative",
            width: "200px",
            height: "200px",
            borderRadius: "15px",
            ...imgSx,
          }}
        >
          <SitoImage
            sx={{
              width: "200px",
              height: "200px",
              borderRadius: "15px",
              objectFit: "cover",
              ...imgSx,
            }}
            src={
              item.photo ||
              `https://loremflickr.com/320/240/${
                ["brazil", "paris", "canada"][Math.floor(Math.random() * 3)]
              }/all?lock=${index}`
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
              borderRadius: "15px",
              transition: "all 500ms ease",
              "&:hover": control ? "" : { opacity: 1 },
            }}
          >
            <PlayCircleFilledWhiteIcon
              color="primary"
              sx={{
                fontSize: "80px",
              }}
            />
          </Box>
        </Box>
        {control ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <IconButton onClick={() => setState(!state)} color="inherit">
              {state ? (
                <PlayCircleFilledWhiteIcon fontSize="large" />
              ) : (
                <PauseCircleIcon fontSize="large" />
              )}
            </IconButton>
            <Box sx={{ width: "100%", marginBottom: "-15px" }}>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "-10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  fontWeight="bold"
                  sx={{ color: theme.palette.disabled.main }}
                >
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Typography fontSize="0.9rem" variant="caption">
                    00:00
                  </Typography>
                  {" / "}{" "}
                  <Typography fontSize="0.9rem" variant="caption">
                    00:00
                  </Typography>
                </Box>
              </Box>
              <Slider size="small" color="primary" value={songTrack} />
            </Box>
          </Box>
        ) : null}

        {!control ? (
          <Typography
            fontWeight="bold"
            sx={{ color: theme.palette.disabled.main }}
          >
            {item.name}
          </Typography>
        ) : null}

        {control ? (
          <Typography sx={{ color: theme.palette.disabled.main }}>
            {artists[item.genres[0]].name}
          </Typography>
        ) : null}
        <Typography
          variant={control ? "caption" : "body1"}
          sx={{ color: theme.palette.disabled.main }}
        >
          {genres[item.genres[0]].name}
        </Typography>
      </Box>
    </Box>
  );
};

SongCard.propTypes = {
  index: PropTypes.number,
  control: PropTypes.bool,
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default SongCard;
