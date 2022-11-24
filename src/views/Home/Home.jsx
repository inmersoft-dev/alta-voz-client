// sito components
import SitoContainer from "sito-container";

// sections

import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
    </SitoContainer>
  );
};

export default Home;
