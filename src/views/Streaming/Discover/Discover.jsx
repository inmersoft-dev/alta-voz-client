import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import Grid from "../../../components/Grid/Grid";
import SongCard from "../../../components/SongCard/SongCard";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

//test
import { songs } from "../../../data/data";

const Discover = () => {
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
        <Typography variant="h4">
          {languageState.texts.Home.Discover.Title}
        </Typography>
        <Link to="/songs?by=genres" className={css({ textDecoration: "none" })}>
          <Button>{languageState.texts.Home.Discover.SeeMore}</Button>
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Grid
          model="songs"
          component="song"
          count={8}
          sx={{ gap: "10px" }}
          childSx={{ flex: 1 }}
        />
        <SongCard
          item={songs[0]}
          index={0}
          sx={{
            width: "400px",
            marginLeft: "20px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
          control
          imgSx={{
            width: "100%",
            height: "400px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Discover;
