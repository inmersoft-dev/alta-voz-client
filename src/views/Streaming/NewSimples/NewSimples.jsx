import Slider from "react-slick";
import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// @mui/icons-material
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// components
import SongCard from "../../../components/SongCard/SongCard";
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// test
import { songs } from "../../../data/data";

const NewSimples = () => {
  const { languageState } = useLanguage();

  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: (
      <Button
        color="primary"
        variant="contained"
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
          sx={{
            color: `#222 !important`,
            marginLeft: "-3px",
          }}
        />
      </Button>
    ),
    nextArrow: (
      <Button
        color="primary"
        variant="contained"
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
        <ChevronRightIcon
          sx={{
            color: `#222 !important`,
          }}
        />
      </Button>
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">
          {languageState.texts.Streaming.NewSimples.Title}
        </Typography>
        <Link
          to="/playlists?by=date"
          className={css({ textDecoration: "none" })}
        >
          <Button>{languageState.texts.Streaming.NewSimples.SeeMore}</Button>
        </Link>
      </Box>
      <Box
        sx={{
          "&:first-child": {
            width: "100% !important",
            height: "250px !important",
          },
        }}
      >
        <Slider {...settings}>
          {songs.slice(19, 39).map((item, i) => (
            <InViewComponent key={item.id} delay={`0.${i + 1}s`}>
              <SongCard item={item} index={i} />
            </InViewComponent>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default NewSimples;
