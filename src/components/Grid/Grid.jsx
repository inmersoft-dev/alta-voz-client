// @mui/material
import { useTheme, Box } from "@mui/material";

// components
import InViewComponent from "../InViewComponent/InViewComponent";

// test
import { songs, albums, artists, genres } from "../../data/data";
import SongCard from "../SongCard/SongCard";

const models = { songs, albums, artists, genres };

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
        sx={{ width: "100%", display: "flex", gap: "40px", flexWrap: "wrap" }}
      >
        {songs.slice(9, 19).map((item, i) => (
          <InViewComponent delay={`0.${i + 2}s`} sx={{ flex: "1 1 250px" }}>
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
