import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography } from "@mui/material";

// sito components
import SitoImage from "sito-image";

// images
import noSong from "../../assets/images/noSong.png";

// data
import { genres } from "../../data/data";

const SongCard = (props) => {
  const { item } = props;

  return (
    <Link
      to={`/details?type=song&id=${item.id}`}
      className={css({ color: "inherit", textDecoration: "none" })}
    >
      <Box
        gap="5px"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <SitoImage
          sx={{
            width: "150px",
            height: "150px",
            borderRadius: "15px",
            objectFit: "cover",
          }}
          src={item.photo || noSong}
          alt={item.id}
        />

        <Typography fontWeight="bold" sx={{ color: "aliceblue" }}>
          {item.name}
        </Typography>
        <Typography sx={{ color: "aliceblue" }}>
          {genres[item.genres[0]].name}
        </Typography>
      </Box>
    </Link>
  );
};

SongCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default SongCard;
