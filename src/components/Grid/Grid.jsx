// @mui/material
import { Box } from "@mui/material";

// components
import SongCard from "../SongCard/SongCard";
import InViewComponent from "../InViewComponent/InViewComponent";

// test
import {
  albums,
  artists,
  genres,
  concerts,
  events,
  songs,
} from "../../data/data";

const models = { albums, artists, genres, concerts, events, songs };

const Grid = (props) => {
  const { model, filter, count, childSx } = props;
  console.log("models", models[model]);
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box
        sx={{ width: "100%", display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        {models[model].slice(0, count).map((item, i) => (
          <InViewComponent
            delay={`0.${i + 2}s`}
            sx={{ flex: "1 1 150px", ...childSx }}
          >
            <SongCard item={item} index={i} />
          </InViewComponent>
        ))}
      </Box>
    </Box>
  );
};

Grid.defaultProps = {
  count: 10,
  model: "songs",
  filter: "genres",
};

export default Grid;
