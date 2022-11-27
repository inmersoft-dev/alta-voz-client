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
import noGenre from "../../assets/images/noGenre.png";

// test
import { songs, albums, artists, genres } from "../../data/data";

const models = { songs, albums, artists, genres };

const Grid = (props) => {
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
      <Box
        sx={{ width: "100%", display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        {genres.slice(0, 8).map((item, i) => (
          <InViewComponent delay={`0.${i + 2}s`} sx={{ flex: "1 1 300px" }}>
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
                display: "flex",

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
                    background: `${item.color}91`,
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    fontWeight="bold"
                    variant="h5"
                    sx={{ color: item.fontColor }}
                  >
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

Grid.defaultProps = {
  count: 10,
  model: "songs",
  filter: "genres",
};

export default Grid;
