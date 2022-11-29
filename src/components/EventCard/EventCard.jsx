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

const EventCard = (props) => {
  const theme = useTheme();
  const { item, index } = props;

  return (
    <Box
      sx={{
        height: "250px",
        width: "100%",
        border: "1px solid",
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
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "space-between",
          }}
        >
          <Box>
            <Typography
              fontWeight="bold"
              sx={{ color: theme.palette.disabled.main }}
            >
              {item.title}
            </Typography>
            <Typography sx={{ color: theme.palette.disabled.main }}>
              {item.subtitle}
            </Typography>
          </Box>
          <Box
            display="flex"
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{ color: theme.palette.disabled.main }}
              >
                {item.date || parseDateTime(new Date().getTime())}
              </Typography>
            </Box>

            <SitoImage
              sx={{ width: "60px", height: "60px", borderRadius: "100%" }}
              src={
                item.photo ||
                `https://loremflickr.com/320/240/${
                  ["brazil", "paris", "canada"][Math.floor(Math.random() * 3)]
                }/all?lock=${index}`
              }
              alt={item.id}
            />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

EventCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default EventCard;
