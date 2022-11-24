// @mui/material
import { Box, Typography } from "@mui/material";

// context
import { useLanguage } from "../../context/LanguageProvider";

// components
import InViewComponent from "../../components/InViewComponent/InViewComponent";

// styles
import "./style.css";

const NotFound = () => {
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "40px",
      }}
    >
      <InViewComponent>
        <Typography variant="h2" sx={{ marginBottom: 0 }}>
          {languageState.texts.NotFound.Title}
        </Typography>
      </InViewComponent>
      <InViewComponent delay="1.5s">
        <Typography variant="h4">
          {languageState.texts.NotFound.Subtitle.one}
        </Typography>
      </InViewComponent>
      <InViewComponent delay="2.5s">
        <Typography variant="h4">
          {languageState.texts.NotFound.Subtitle.two}
        </Typography>
      </InViewComponent>
    </Box>
  );
};

export default NotFound;
