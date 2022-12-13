import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography, useTheme } from "@mui/material";

// components
import PrettyGrid from "../../../components/Grid/PrettyGrid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const Moods = () => {
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
        <Box>
          <Typography variant="h4">
            {languageState.texts.Streaming.Moods.Title}
          </Typography>
        </Box>
        <Link
          to="/concerts?by=date"
          className={css({ textDecoration: "none" })}
        >
          <Button>{languageState.texts.Streaming.Moods.SeeMore}</Button>
        </Link>
      </Box>
      <PrettyGrid
        count={4}
        model="moods"
        component="mood"
        childSx={{ flex: 1 }}
      />
    </Box>
  );
};

export default Moods;
