import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography } from "@mui/material";

// @mui/icons-material
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

// sito components
import SitoImage from "sito-image";

// data
import { genres } from "../../data/data";

const SongCard = (props) => {
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
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 20,
              background: "#00000091",
              opacity: 0,
              borderRadius: "15px",
              transition: "all 500ms ease",
              "&:hover": { opacity: 1 },
            }}
          >
            <PlayCircleFilledWhiteIcon
              color="secondary"
              sx={{
                fontSize: "80px",
              }}
            />
          </Box>
        </Box>
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
  index: PropTypes.number,
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default SongCard;
