import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import PrettyGrid from "../../../components/Grid/PrettyGrid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const NewAlbums = () => {
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
        <Typography variant="h4" sx={{ marginBottom: 0 }}>
          {languageState.texts.Home.NewAlbums.Title}
        </Typography>
        <Link to="/artists" className={css({ textDecoration: "none" })}>
          <Button>{languageState.texts.Home.NewAlbums.SeeMore}</Button>
        </Link>
      </Box>
      <PrettyGrid
        count={6}
        model="albums"
        component="album"
        childSx={{ flex: 1 }}
      />
    </Box>
  );
};

export default NewAlbums;
