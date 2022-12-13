import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography } from "@mui/material";

// @mui/icons-material
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

// images
import noPhoto from "../../assets/images/noPhoto.png";
import noGenre from "../../assets/images/noGenre.png";

const ConcertCard = (props) => {
  const { item } = props;

  return (
    <Box
      sx={{
        height: "165px",
        width: "100%",
        background: `url(${item.image || noGenre})`,
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
            color="primary"
            sx={{
              fontSize: "80px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
            position: "absolute",
            background: "#00000099",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "space-between",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "aliceblue" }}
          >
            {item.topic}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

ConcertCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default ConcertCard;
