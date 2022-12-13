import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import PrettyGrid from "../../../components/Grid/PrettyGrid";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const Events = () => {
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
        <Box>
          <Typography variant="h4">
            {languageState.texts.Home.Events.Title}
          </Typography>
        </Box>
        <Link
          to="/concerts?by=date"
          className={css({ textDecoration: "none" })}
        >
          <Button>{languageState.texts.Home.Events.SeeMore}</Button>
        </Link>
      </Box>
      <PrettyGrid
        count={4}
        model="events"
        component="event"
        childSx={{ flex: 1 }}
      />
    </Box>
  );
};

export default Events;
