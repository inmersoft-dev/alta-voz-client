import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Typography } from "@mui/material";

// sito components
import SitoImage from "sito-image";

// images
// import noGenre from "../../assets/images/noGenre.jpg";

const ArtistCard = (props) => {
  const theme = useTheme();

  const { item, index } = props;

  return (
    <Link
      to={`/details?type=artist&id=${item.id}`}
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
          sx={{
            width: "200px",
            height: "200px",
            borderRadius: "15px",
            objectFit: "cover",
          }}
          src={
            item.photo ||
            `https://loremflickr.com/320/240/${
              ["brazil", "paris", "canada"][Math.floor(Math.random() * 3)]
            }/all?lock=${index}`
          }
          alt={item.id}
        />
        <Typography sx={{ color: theme.palette.disabled.main }}>
          {item.name}
        </Typography>
      </Box>
    </Link>
  );
};

ArtistCard.propTypes = {
  index: PropTypes.number,
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default ArtistCard;
