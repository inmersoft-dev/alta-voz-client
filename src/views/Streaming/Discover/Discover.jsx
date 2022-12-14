import { useState, useReducer } from "react";
import Slider from "react-slick";

// @mui/material
import { Box, Chip, IconButton, Button, Typography } from "@mui/material";

// @mui/icons-material
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
// slider
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// components
import Grid from "../../../components/Grid/Grid";
import SongCard from "../../../components/SongCard/SongCard";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

//test
import { songs, genres } from "../../../data/data";

const Discover = () => {
  const { languageState } = useLanguage();

  const [showFilters, setShowFilters] = useState(false);

  const genreReducer = (genresState, action) => {
    const { type } = action;
    switch (type) {
      case "set": {
        const { index } = action;
        genresState[index].active = !genresState[index];
        return [...genresState];
      }
      default:
        return [...genres, { id: "all", name: "Todos" }].reverse();
    }
  };

  const [genresFilters, setGenresFilters] = useReducer(
    genreReducer,
    [...genres, { id: "all", name: "Todos" }].reverse()
  );

  const timeReducer = (timeState, action) => {
    const { type } = action;
    switch (type) {
      case "set": {
        const { index } = action;
        if (timeState[index].active)
          timeState[index].active = !timeState[index];
        else timeState[index].active = true;
        return [...timeState];
      }
      default:
        return languageState.texts.Streaming.Discover.Filters.TimePreviews.map(
          (item) => ({ name: item })
        );
    }
  };
  const [timeFilters, setTimeFilters] = useReducer(
    timeReducer,
    languageState.texts.Streaming.Discover.Filters.TimePreviews.map((item) => ({
      name: item,
    }))
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    variableWidth: true,
    slidesToScroll: 2,
    prevArrow: (
      <IconButton
        sx={{
          zIndex: 20,
          "&:before": {
            display: "none",
          },
          display: "flex !important",
          position: "absolute",
          minWidth: 0,
          width: "35px",
          height: "35px",
          borderRadius: "100%",
        }}
      >
        <ChevronLeftIcon
          color="primary"
          sx={{
            marginLeft: "-3px",
          }}
        />
      </IconButton>
    ),
    nextArrow: (
      <IconButton
        sx={{
          zIndex: 20,
          "&:before": {
            display: "none",
          },
          display: "flex !important",
          position: "absolute",
          minWidth: 0,
          width: "35px",
          height: "35px",
          borderRadius: "100%",
        }}
      >
        <ChevronRightIcon color="primary" />
      </IconButton>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        padding: {
          xl: "40px 5rem 40px 5rem",
          lg: "40px 4rem 40px 4rem",
          xs: "30px 20px",
        },
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Typography variant="h4">
            {languageState.texts.Streaming.Discover.Title}
          </Typography>
        </Box>

        <Button
          color="primary"
          onClick={() => setShowFilters(!showFilters)}
          sx={{ gap: "5xpx" }}
        >
          {!showFilters ? (
            <FilterAltIcon sx={{ marginBottom: "3px" }} />
          ) : (
            <FilterAltOffIcon sx={{ marginBottom: "3px" }} />
          )}
          {languageState.texts.Streaming.Discover.Tooltip}
        </Button>
      </Box>
      <Box
        sx={{
          height: showFilters ? "200px" : "0px",
          transition: "height 200ms ease",
          overflow: "hidden",
        }}
      >
        <Typography>
          {languageState.texts.Streaming.Discover.Filters.Genres}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "10px",
            "&:nth-child(2)": {
              width: "95%",
              marginLeft: "20px",
            },
          }}
        >
          <Slider {...settings}>
            {genresFilters.reverse().map((item, i) => (
              <Box key={item.name} sx={{ paddingLeft: i > 0 ? "10px" : 0 }}>
                <Chip
                  sx={{ display: "flex !important", cursor: "pointer" }}
                  label={item.name}
                  variant={item.active ? "filled" : "outlined"}
                  color={item.active ? "primary" : "disabled"}
                  onClick={() => setGenresFilters({ type: "set", index: i })}
                />
              </Box>
            ))}
          </Slider>
        </Box>
        <Typography sx={{ marginTop: "10px" }}>
          {languageState.texts.Streaming.Discover.Filters.TimePreview}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "10px",
            "&:nth-child(2)": {
              width: "95%",
              marginLeft: "20px",
            },
          }}
        >
          <Slider {...settings}>
            {timeFilters.map((item, i) => (
              <Box key={item.name} sx={{ paddingLeft: i > 0 ? "10px" : 0 }}>
                <Chip
                  sx={{
                    display: "flex !important",
                    cursor: "pointer",
                  }}
                  label={item.name}
                  variant={item.active ? "filled" : "outlined"}
                  color={item.active ? "primary" : "disabled"}
                  onClick={() => setTimeFilters({ type: "set", index: i })}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Grid
          model="songs"
          component="song"
          count={8}
          sx={{ gap: "10px" }}
          childSx={{ flex: 1 }}
        />
        <SongCard
          item={songs[0]}
          index={0}
          sx={{
            width: "400px",
            marginLeft: "20px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
          control
          imgSx={{
            width: "100%",
            height: "400px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Discover;
