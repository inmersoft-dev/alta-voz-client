import Slider from "react-slick";
import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Button, Typography } from "@mui/material";

// @mui/icons-material
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// components
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// test
import { news } from "../../../data/data";

const Artists = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <Button
        color="secondary"
        variant="contained"
        sx={{
          zIndex: 20,
          "&:before": {
            display: "none",
          },
          display: "flex !important",
          position: "absolute",
          minWidth: 0,
          left: "20px",
          width: "35px",
          height: "35px",
          borderRadius: "100%",
        }}
      >
        <ChevronLeftIcon
          sx={{
            color: `${theme.palette.primary.main} !important`,
            marginLeft: "-3px",
          }}
        />
      </Button>
    ),
    nextArrow: (
      <Button
        color="secondary"
        variant="contained"
        sx={{
          zIndex: 20,
          "&:before": {
            display: "none",
          },
          display: "flex !important",
          position: "absolute",
          right: "70px",
          minWidth: 0,
          width: "35px",
          height: "35px",
          borderRadius: "100%",
        }}
      >
        <ChevronRightIcon
          sx={{
            color: `${theme.palette.primary.main} !important`,
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
        marginRight: "-50px",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        padding: {
          xl: "40px 0 40px 0",
          xs: "40px 0 40px 0",
        },
      }}
    >
      <Box
        sx={{
          "&:first-child": {
            width: "100% !important",
            height: "250px !important",
          },
        }}
      >
        <Box
          sx={{
            marginBottom: "20px",
            padding: {
              xl: "0 5rem 0 5rem",
              lg: "0 4rem 0 4rem",
              xs: "0 20px",
            },
          }}
        >
          <Typography variant="h4">
            {languageState.texts.Home.Hero.Title}
          </Typography>
        </Box>
        <Slider {...settings}>
          {news.slice(0, 5).map((item, i) => (
            <Link
              to={`/details?type=news&id=${item.id}`}
              className={css({ color: "inherit", textDecoration: "none" })}
            >
              <InViewComponent key={item.id} delay={`0.${i + 1}s`}>
                <Box
                  sx={{
                    borderRadius: "15px",
                    width: "500px",
                    height: "280px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "repeat",
                    background: `url('${
                      item.photo ||
                      `https://loremflickr.com/500/500/music/all?lock=${i}`
                    }')`,
                    position: "relative",
                  }}
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
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="h4" sx={{ color: "aliceblue" }}>
                      {item.title.length > 20
                        ? `${item.title.substring(0, 20)}...`
                        : item.title}
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        borderRadius: "25px",
                        width: "100px",
                        marginTop: "20px",
                      }}
                    >
                      {languageState.texts.Home.Hero.Button}
                    </Button>
                  </Box>
                </Box>
              </InViewComponent>
            </Link>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Artists;
