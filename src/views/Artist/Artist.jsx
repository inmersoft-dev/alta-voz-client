import React from "react";

// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";
import Albums from "./Albums/Albums";
import Simples from "./Simples/Simples";
import TopTracks from "./TopTracks/TopTracks";

const Artist = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <TopTracks />
      <Albums />
      <Simples />
    </SitoContainer>
  );
};

export default Artist;
