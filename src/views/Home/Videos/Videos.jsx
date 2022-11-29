import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import Grid from "../../../components/Grid/Grid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const Videos = () => {
  const { languageState } = useLanguage();

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
        <Typography variant="h4" sx={{ marginBottom: "5px" }}>
          {languageState.texts.Home.Videos.Title}
        </Typography>
        <Link to="/videos?by=date" className={css({ textDecoration: "none" })}>
          <Button>{languageState.texts.Home.Videos.SeeMore}</Button>
        </Link>
      </Box>
      <Grid models="genres" />
    </Box>
  );
};

export default Videos;
