import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import PrettyGrid from "../../../components/Grid/PrettyGrid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const Concerts = () => {
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
        <Box>
          <Typography variant="h4">
            {languageState.texts.Home.Concerts.Title}
          </Typography>
        </Box>
        <Link
          to="/concerts?by=date"
          className={css({ textDecoration: "none" })}
        >
          <Button>{languageState.texts.Home.Concerts.SeeMore}</Button>
        </Link>
      </Box>
      <PrettyGrid model="concerts" component="concert" />
    </Box>
  );
};

export default Concerts;
