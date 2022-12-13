import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Button, Typography } from "@mui/material";

// components
import ChartCard from "../../../components/ChartCard/ChartCard";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// test data
import { topCharts } from "../../../data/topCharts";

const TopCharts = () => {
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <Typography variant="h4" sx={{ marginBottom: 0 }}>
          {languageState.texts.Streaming.TopCharts.Title}
        </Typography>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <ChartCard
            list={topCharts.slice(0, 10)}
            model="songs"
            title={languageState.texts.Streaming.TopCharts.CardVideo.Title}
          />
          <ChartCard
            list={topCharts.slice(11, 20)}
            model="artist"
            title={languageState.texts.Streaming.TopCharts.CardArtist.Title}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TopCharts;
