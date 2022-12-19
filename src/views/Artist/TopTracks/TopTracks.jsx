import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import SongList from "../../../components/SongList/SongList";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const TopTracks = () => {
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
          xs: "40px 20px",
        },
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h4" sx={{ marginBottom: "5px" }}>
          {languageState.texts.Artist.TopTracks.Title}
        </Typography>
        <Link to="/artists" className={css({ textDecoration: "none" })}>
          <Button color="primary">
            {languageState.texts.Artist.TopTracks.SeeMore}
          </Button>
        </Link>
      </Box>
      <SongList count={5} />
    </Box>
  );
};

export default TopTracks;
