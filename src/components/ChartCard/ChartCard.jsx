import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Typography, Button } from "@mui/material";

// @mui/icons-material
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // right
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"; // down
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // up

// contexts
import { useLanguage } from "../../context/LanguageProvider";

// images
import noPhoto from "../../assets/images/noPhoto.png";

const ArtistCard = (props) => {
  const theme = useTheme();

  const { languageState } = useLanguage();

  const { list, title, model } = props;

  // directions
  const directions = {
    right: <ArrowForwardIcon />,
    down: <ArrowDownwardIcon color="error" />,
    up: <ArrowUpwardIcon color="success" />,
  };

  const getDirection = (direction) => {
    if (direction % 5 === 0) return directions.right;
    if (direction % 3 === 0) return directions.up;
    return directions.down;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        padding: "20px",
        width: "50%",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {list.map((item) => (
          <Box display="flex" alignItems="center" sx={{ flex: "1 1 215px" }}>
            {directions[getDirection(item.directions)]}
            <Box display="flex" flexDirection="column">
              <Link
                to={`/details?type=${model}`}
                className={css({
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                })}
              >
                <Typography variant="subtitle1">{item.title}</Typography>
              </Link>
              <Typography variant="caption">{item.author}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Link
        to={`/${model}?search=top`}
        className={css({
          marginTop: "20px",
          color: theme.palette.primary.main,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        })}
      >
        <Typography color="primary">
          {languageState.texts.Streaming.TopCharts.SeeMore}
        </Typography>
      </Link>
    </Box>
  );
};

ArtistCard.propTypes = {
  title: PropTypes.string,
  model: PropTypes.string,
  list: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    direction: PropTypes.number,
  }),
};

export default ArtistCard;
