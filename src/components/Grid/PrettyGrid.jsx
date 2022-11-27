import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// styles
import { styled } from "@mui/material/styles";

// @mui/material
import { Box, Paper, Button, Typography } from "@mui/material";

// components
import InViewComponent from "../InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../context/LanguageProvider";

// images
import noBackground from "../../assets/images/noBackground.jpg";

// test
import { albums, artists, genres } from "../../data/data";

const models = { albums, artists, genres };

const PrettyGrid = (props) => {
  const { model, filter, count } = props;

  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <InViewComponent
          delay="0.1s"
          sx={{
            height: "260px",
            background: `url(${albums[0].image || noBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <Link
            to={`/details?type=${model}g&id=${albums[0].id}`}
            className={css({ color: "inherit", textDecoration: "none" })}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                borderRadius: "15px",
                position: "absolute",
                background: "#00000091",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box>
                <Typography variant="caption" sx={{ color: "aliceblue" }}>
                  {artists[albums[5].authorId].name}
                </Typography>
                <Typography
                  fontWeight="bold"
                  variant="h4"
                  sx={{ color: "aliceblue" }}
                >
                  {albums[5].name}
                </Typography>
                <Typography sx={{ color: "aliceblue" }}>
                  {genres[1].name}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "40px" }}
              >
                {languageState.texts.Buttons.ListenNow}
              </Button>
            </Box>
          </Link>
        </InViewComponent>
      </Box>
      <Box sx={{ width: "100%", display: "flex", gap: "20px" }}>
        {albums.slice(1, 5).map((item, i) => (
          <InViewComponent delay={`0.${i + 2}s`} sx={{ width: "100%" }}>
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
                to={`/details?type=${model}&id=${item.id}`}
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
          </InViewComponent>
        ))}
      </Box>
    </Box>
  );
};

PrettyGrid.defaultProps = {
  count: 10,
  model: "songs",
  filter: "genres",
};

export default PrettyGrid;
