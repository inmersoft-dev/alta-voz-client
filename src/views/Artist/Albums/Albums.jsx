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
import AlbumCard from "../../../components/AlbumCard/AlbumCard";
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// test
import { albums } from "../../../data/data";

const Albums = () => {
  const { languageState } = useLanguage();

  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
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
          xl: "0px 5rem 40px 5rem",
          lg: "0px 4rem 40px 4rem",
          xs: "40px 20px",
        },
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h4" sx={{ marginBottom: "5px" }}>
            {languageState.texts.Artist.Albums.Title}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            {languageState.texts.Artist.Albums.Description}
          </Typography>
        </Box>
        <Link to="/artists" className={css({ textDecoration: "none" })}>
          <Button color="primary">
            {languageState.texts.Artist.Albums.SeeMore}
          </Button>
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
          {albums.slice(0, 18).map((item, i) => (
            <InViewComponent key={item.id} delay={`0.${i + 1}s`}>
              <AlbumCard
                sx={{ width: "200px", height: "200px" }}
                translateY={false}
                item={item}
                index={i}
              />
            </InViewComponent>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Albums;
