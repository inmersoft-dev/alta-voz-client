// @mui/material
import { Box } from "@mui/material";

// components
import AlbumCard from "../AlbumCard/AlbumCard";
import ConcertCard from "../ConcertCard/ConcertCard";
import InViewComponent from "../InViewComponent/InViewComponent";

// test
import { albums, artists, genres, concerts } from "../../data/data";

const models = { albums, artists, genres, concerts };

const PrettyGrid = (props) => {
  const { model, component, filter, count } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", gap: "20px" }}>
        {models[model].slice(0, 4).map((item, i) => (
          <InViewComponent delay={`0.${i + 2}s`} sx={{ width: "100%" }}>
            {component === "album" ? <AlbumCard item={item} /> : null}
            {component === "concert" ? (
              <ConcertCard item={item} index={i} />
            ) : null}
          </InViewComponent>
        ))}
      </Box>
    </Box>
  );
};

PrettyGrid.defaultProps = {
  count: 10,
  model: "songs",
  filter: "genres",
};

export default PrettyGrid;
