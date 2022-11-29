import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography } from "@mui/material";

// images
import noBackground from "../../assets/images/noBackground.jpg";

// test
import { artists } from "../../data/data";

const AlbumCard = (props) => {
  const { item } = props;

  return (
    <Box
      sx={{
        height: "165px",
        width: "100%",
        background: `url(${item.image || noBackground})`,
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
            background: "#00000091",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justify: "flex-end",
          }}
        >
          <Typography variant="caption" sx={{ color: "aliceblue" }}>
            {artists[item.authorId].name}
          </Typography>
          <Typography fontWeight="bold" sx={{ color: "aliceblue" }}>
            {item.name}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

AlbumCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default AlbumCard;
