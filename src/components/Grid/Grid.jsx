// @mui/material
import { useTheme, Box } from "@mui/material";

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
  const theme = useTheme();
  const { model, filter, count } = props;

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
        {models[model].slice(9, 21).map((item, i) => (
          <InViewComponent delay={`0.${i + 2}s`} sx={{ flex: "1 1 150px" }}>
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
