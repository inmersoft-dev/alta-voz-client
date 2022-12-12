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
import SitoImage from "sito-image";

const CatchToAction = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        marginTop: "40px",
        marginBottom: "40px",
        gap: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: {
          xl: "40px 5rem 40px 5rem",
          xs: "40px 4rem 40px 4rem",
        },
      }}
    >
      <Box
        sx={{
          width: "650px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        <InViewComponent delay="0.1s">
          <Typography variant="h3">
            {languageState.texts.Home.CatchToAction.Title}
          </Typography>
        </InViewComponent>
        <InViewComponent delay="0.3s">
          <Typography variant="body1">
            {languageState.texts.Home.CatchToAction.Description}
          </Typography>
        </InViewComponent>
        <InViewComponent delay="0.5s">
          <Button variant="contained" sx={{ borderRadius: "25px" }}>
            {languageState.texts.Home.CatchToAction.Button}
          </Button>
        </InViewComponent>
      </Box>
      <Box>
        <InViewComponent delay="0.8s">
          <SitoImage
            sx={{ width: "300px", height: "300px", borderRadius: "100%" }}
            src="https://xsgames.co/randomusers/assets/avatars/female/3.jpg"
            alt="person"
          />
        </InViewComponent>
      </Box>
    </Box>
  );
};

export default CatchToAction;
