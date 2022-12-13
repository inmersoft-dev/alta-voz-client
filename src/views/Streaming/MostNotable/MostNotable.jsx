import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { useTheme, Box, Button, Typography } from "@mui/material";

// components
import Grid from "../../../components/Grid/Grid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const Discover = () => {
  const theme = useTheme();
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
        background: theme.palette.background.paper,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">
          {languageState.texts.Home.Discover.Title}
        </Typography>
        <Link to="/songs?by=likes" className={css({ textDecoration: "none" })}>
          <Button>{languageState.texts.Home.Discover.SeeMore}</Button>
        </Link>
      </Box>
      <Grid
        models="songs"
        component="song"
        count={12}
        filter={[{ genders: ["urbano", "pop", "rock"] }]}
      />
    </Box>
  );
};

export default Discover;
