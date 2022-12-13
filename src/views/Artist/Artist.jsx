import React from "react";

// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";

const Artist = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
    </SitoContainer>
  );
};

export default Artist;
