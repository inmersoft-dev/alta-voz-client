import Slider from "react-slick";

// @mui/material
import { Box, Typography } from "@mui/material";

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
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        {languageState.texts.Home.Albums.Title}
      </Typography>
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
              <AlbumCard item={item} />
            </InViewComponent>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Albums;
