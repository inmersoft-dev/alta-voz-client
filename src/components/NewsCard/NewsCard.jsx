import { Link } from "react-router-dom";
import { useState } from "react";

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
import { parseDateTime } from "../../services/utils/parsers";

const NewsCard = (props) => {
  const theme = useTheme();
  const { item, index } = props;

  const [onHover, setOnHover] = useState(false);

  return (
    <Box
      sx={{
        height: "350px",
        borderRadius: "15px",
        position: "relative",
        "&:hover": {
          transition: "transform 500ms ease !important",
          transform: "translateY(-10px)",
        },
      }}
    >
      <Link
        to={`/details?type=news&id=${item.id}`}
        className={css({ color: "inherit", textDecoration: "none" })}
      >
        <Box
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url('${
              item.photo ||
              `https://loremflickr.com/320/240/${
                ["brazil", "paris", "canada"][Math.floor(Math.random() * 3)]
              }/all?lock=${index}`
            }')`,
          }}
        >
          <Box
            sx={{
              padding: "20px",
              borderRadius: "15px",
              height: onHover ? "100%" : "45%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              transition: "height 200ms ease",
              background:
                "linear-gradient(0deg, rgba(34,34,34,1) 0%, rgba(34,34,34,0.8194852941176471) 75%, rgba(0,212,255,0) 100%)",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography
              sx={{
                height: onHover ? "100px" : "25px",
                overflow: "hidden",
                transition: "height 200ms ease",
              }}
              variant="body1"
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

NewsCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default NewsCard;
