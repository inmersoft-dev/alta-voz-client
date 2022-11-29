import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import Grid from "../../../components/Grid/Grid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const Discover = () => {
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        padding: {
          xl: "0px 5rem 40px 5rem",
          lg: "0px 4rem 40px 4rem",
          xs: "30px 20px",
        },
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
      <Grid models="songs" />
    </Box>
  );
};

export default Discover;
