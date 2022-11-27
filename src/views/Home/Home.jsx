// @mui/material
import { Box, Typography } from "@mui/material";

// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";
import Songs from "./Songs/Songs";
import Artists from "./Artists/Artists";
import Genres from "./Genres/Genres";
import Albums from "./Albums/Albums";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <Albums />
      <Artists />
      <Genres />
      <Songs />
    </SitoContainer>
  );
};

export default Home;
