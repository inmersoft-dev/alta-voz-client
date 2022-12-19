import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography } from "@mui/material";

// @mui/icons-material
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

// images
import noBackground from "../../assets/images/noBackground.jpg";

// test
import { artists } from "../../data/data";

const AlbumCard = (props) => {
  const { item, translateY, playAnimation, sx } = props;

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
          transform: translateY ? "translateY(-10px)" : "",
        },
        ...sx,
      }}
    >
      <Link
        to={`/details?type=album&id=${item.id}`}
        className={css({
          color: "inherit",
          textDecoration: "none",
          width: "100%",
          height: "100%",
        })}
      >
        <Box
          gap="5px"
          display="flex"
          flexDirection="column"
          sx={{
            position: "relative",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            borderRadius: "15px",
            paddingBottom: "10px",
            background:
              "linear-gradient(0deg, rgba(34,34,34,1) 0%, rgba(34,34,34,0.8194852941176471) 25%, rgba(0,212,255,0) 100%)",
          }}
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
              "&:hover": !playAnimation ? "" : { opacity: 1 },
            }}
          >
            <PlayCircleFilledWhiteIcon
              color="primary"
              sx={{
                fontSize: "80px",
              }}
            />
          </Box>

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

AlbumCard.defaultProps = {
  translateY: true,
  playAnimation: true,
};

AlbumCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  translateY: PropTypes.bool,
  playAnimation: PropTypes.bool,
};

export default AlbumCard;
