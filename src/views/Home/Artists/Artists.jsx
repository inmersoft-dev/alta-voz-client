import Slider from "react-slick";
import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import ArtistCard from "../../../components/ArtistCard/ArtistCard";
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// test
import { artists } from "../../../data/data";

const Artists = () => {
  const { languageState } = useLanguage();

  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <Box
      sx={{
        marginTop: "20px",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        padding: {
          xl: "20px 5rem 20px 5rem",
          lg: "20px 5rem 20px 4rem",
          xs: "20px",
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
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          {languageState.texts.Home.Artists.Title}
        </Typography>
        <Link to="/artists" className={css({ textDecoration: "none" })}>
          <Button>{languageState.texts.Home.SeeMore}</Button>
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
          {artists.slice(0, 18).map((item, i) => (
            <InViewComponent key={item.id} delay={`0.${i + 1}s`}>
              <ArtistCard item={item} />
            </InViewComponent>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Artists;
