import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import PrettyGrid from "../../../components/Grid/PrettyGrid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const TrendingSimples = () => {
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
          {languageState.texts.Streaming.TrendingSimples.Title}
        </Typography>
        <Link to="/artists" className={css({ textDecoration: "none" })}>
          <Button>
            {languageState.texts.Streaming.TrendingSimples.SeeMore}
          </Button>
        </Link>
      </Box>
      <PrettyGrid
        count={12}
        model="songs"
        component="song"
        childSx={{ flex: 1 }}
      />
    </Box>
  );
};

export default TrendingSimples;
