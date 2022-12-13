// @mui/material
import { Box } from "@mui/material";

// components
import NewsCard from "../NewsCard/NewsCard";
import AlbumCard from "../AlbumCard/AlbumCard";
import EventCard from "../EventCard/EventCard";
import ConcertCard from "../ConcertCard/ConcertCard";
import InViewComponent from "../InViewComponent/InViewComponent";

// test
import {
  albums,
  artists,
  genres,
  concerts,
  events,
  songs,
  news,
} from "../../data/data";
import SongCard from "../SongCard/SongCard";

const models = { albums, artists, genres, concerts, events, songs, news };

const PrettyGrid = (props) => {
  const { model, component, filter, count, sx } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          ...sx,
        }}
      >
        {models[model].slice(0, count).map((item, i) => (
          <InViewComponent delay={`0.${i + 2}s`} sx={{ flex: "1 1 350px" }}>
            {component === "album" ? <AlbumCard item={item} /> : null}
            {component === "concert" ? (
              <ConcertCard item={item} index={i} />
            ) : null}
            {component === "event" ? <EventCard item={item} index={i} /> : null}
            {component === "song" ? <SongCard item={item} index={i} /> : null}
            {component === "news" ? <NewsCard item={item} index={i} /> : null}
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
