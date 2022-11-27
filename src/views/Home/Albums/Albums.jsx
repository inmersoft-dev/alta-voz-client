import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography, useTheme } from "@mui/material";

// components
import PrettyGrid from "../../../components/Grid/PrettyGrid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const Albums = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        marginTop: "80px",
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
        <Box>
          <Typography variant="h4" sx={{ marginBottom: "5px" }}>
            {languageState.texts.Home.Albums.Title}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            {languageState.texts.Home.Albums.Description}
          </Typography>
        </Box>
        <Link to="/artists" className={css({ textDecoration: "none" })}>
          <Button>{languageState.texts.Home.Albums.SeeMore}</Button>
        </Link>
      </Box>
      <PrettyGrid model="albums" />
    </Box>
  );
};

export default Albums;
