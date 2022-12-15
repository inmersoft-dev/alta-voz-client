/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography, useTheme } from "@mui/material";

// sito components
import SitoImage from "sito-image";

// images
import noPhoto from "../../assets/images/noPhoto.png";
import noGenre from "../../assets/images/noGenre.png";

// test
import { artists } from "../../data/data";
import { parseDateTime } from "../../services/utils/parsers";

const ConcertCard = (props) => {
  const theme = useTheme();
  const { item, index } = props;

  return (
    <Box
      sx={{
        height: "165px",
        width: "100%",
        background: `url(${item.image || noGenre})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "15px",
        position: "relative",
        "&:hover": {
          transition: "transform 500ms ease !important",
          transform: "translateY(-10px)",
        },
      }}
    >
      <Link
        to={`/details?type=album&id=${item.id}`}
        className={css({ color: "inherit", textDecoration: "none" })}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
            position: "absolute",
            background: "#00000099",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "space-between",
          }}
        >
          <Typography fontWeight="bold" sx={{ color: "aliceblue" }}>
            {item.name}
          </Typography>
          <Box
            display="flex"
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography sx={{ color: theme.palette.disabled.main }}>
                {artists[item.authorId].name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.palette.disabled.main }}
              >
                {parseDateTime(item.date || new Date().getTime())}
              </Typography>
            </Box>

            <SitoImage
              sx={{ width: "60px", height: "60px", borderRadius: "100%" }}
              src={
                item.photo ||
                `https://xsgames.co/randomusers/assets/avatars/${
                  Math.floor(Math.random() * 10) % 2 === 0 ? "male" : "female"
                }/${index}.jpg`
              }
              alt={item.id}
            />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

ConcertCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default ConcertCard;
