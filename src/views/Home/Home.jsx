// sito components
import SitoContainer from "sito-container";
import Artists from "./Artists/Artists";

// sections

import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <Artists />
    </SitoContainer>
  );
};

export default Home;
