import Slider from "react-slick";

// @mui/material
import { Box, Typography } from "@mui/material";

// sito-components
import SitoImage from "sito-image";

// components
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// test
import { artists } from "../../../data/data";

// images
import noPhoto from "../../../assets/images/noPhoto.png";

const Artists = () => {
  const { languageState } = useLanguage();

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <Box
      sx={{
        marginTop: "100px",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "",
        padding: {
          xl: "20px 5rem 100px 5rem",
          lg: "20px 5rem 100px 4rem",
          xs: "20px",
        },
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        {languageState.texts.Home.Artists.Title}
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
          {artists.slice(0, 18).map((item, i) => (
            <InViewComponent delay={`0.${i + 1}s`}>
              <Box
                display="flex"
                flexDirection="column"
                gap="10px"
                alignItems="center"
                justifyContent="center"
              >
                <SitoImage
                  sx={{ width: "200px", height: "200px", borderRadius: "100%" }}
                  src={item.photo || noPhoto}
                  alt={item.id}
                />
                <Typography>{item.name}</Typography>
              </Box>
            </InViewComponent>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Artists;
