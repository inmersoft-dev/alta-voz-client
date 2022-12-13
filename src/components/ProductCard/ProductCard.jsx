import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Typography } from "@mui/material";

// sito components
import SitoImage from "sito-image";

// data
import { genres } from "../../data/data";

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
        <Box
          sx={{
            position: "relative",
            width: "200px",
            height: "200px",
            borderRadius: "15px",
          }}
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
          <Box
            sx={{
              top: 0,
              left: 0,
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 20,
              background: "#00000091",
              borderRadius: "15px",
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{ color: theme.palette.disabled.main, textAlign: "center" }}
            >
              {item.name}
            </Typography>
            <Typography>$ {item.price}</Typography>
          </Box>
        </Box>
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
