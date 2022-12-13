import PropTypes from "prop-types";

// @mui/material
import { Box } from "@mui/material";

// components
import SongCard from "../SongCard/SongCard";
import GenreCard from "../GenreCard/GenreCard";
import ProductCard from "../ProductCard/ProductCard";
import InViewComponent from "../InViewComponent/InViewComponent";

// test
import {
  albums,
  artists,
  genres,
  concerts,
  events,
  songs,
  products,
} from "../../data/data";

const models = { albums, artists, genres, concerts, events, songs, products };

const Grid = (props) => {
  const { model, filter, count, childSx, component, sx } = props;

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
          ...sx,
        }}
      >
        {models[model].slice(0, count).map((item, i) => (
          <InViewComponent
            delay={`0.${i + 2}s`}
            sx={{ flex: "1 1 150px", ...childSx }}
          >
            {component === "song" ? <SongCard item={item} index={i} /> : null}
            {component === "product" ? (
              <ProductCard item={item} index={i} />
            ) : null}
            {component === "genre" ? <GenreCard item={item} index={i} /> : null}
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
  component: "song",
};

Grid.propTypes = {
  count: PropTypes.number,
  model: PropTypes.string,
  filter: PropTypes.any,
  component: PropTypes.string,
};

export default Grid;
