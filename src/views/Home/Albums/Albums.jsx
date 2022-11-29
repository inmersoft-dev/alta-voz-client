import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import PrettyGrid from "../../../components/Grid/PrettyGrid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const Albums = () => {
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        marginTop: "100px",
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
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            {languageState.texts.Home.Albums.Title}
          </Typography>
        </Box>
        <Link to="/artists" className={css({ textDecoration: "none" })}>
          <Button>{languageState.texts.Home.Albums.SeeMore}</Button>
        </Link>
      </Box>
      <PrettyGrid model="albums" component="album"  />
    </Box>
  );
};

export default Albums;
