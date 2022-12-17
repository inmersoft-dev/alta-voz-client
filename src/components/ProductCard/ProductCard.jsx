/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Typography } from "@mui/material";

// sito components
import SitoImage from "sito-image";

const SongCard = (props) => {
  const theme = useTheme();
  const { item, index } = props;

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
            width: "300px",
            height: "300px",
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

        <Typography
          fontWeight="bold"
          variant="subtitle1"
          sx={{ color: theme.palette.disabled.main, textAlign: "center" }}
        >
          {item.name}
        </Typography>
        <Typography variant="body2">{item.type}</Typography>
        <Typography variant="caption">$ {item.price}</Typography>
      </Box>
    </Link>
  );
};

SongCard.propTypes = {
  index: PropTypes.number,
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default SongCard;
