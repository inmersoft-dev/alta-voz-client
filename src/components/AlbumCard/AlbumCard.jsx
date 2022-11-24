import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Typography } from "@mui/material";

// sito components
import SitoImage from "sito-image";

// images
import noAlbum from "../../assets/images/noAlbum.jpg";

const AlbumCard = (props) => {
  const theme = useTheme();

  const { item } = props;

  return (
    <Link
      to={`/details?type=album&id=${item.id}`}
      className={css({ color: "inherit", textDecoration: "none" })}
    >
      <Box
        gap="10px"
        component="a"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <SitoImage
          sx={{ width: "200px", height: "200px", borderRadius: "15px" }}
          src={item.photo || noAlbum}
          alt={item.id}
        />
        <Typography sx={{ color: theme.palette.disabled.main }}>
          {item.name}
        </Typography>
      </Box>
    </Link>
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
