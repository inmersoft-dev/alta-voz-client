// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";
import Songs from "./Songs/Songs";
import Albums from "./Albums/Albums";
import Artists from "./Artists/Artists";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <Songs />
      <Artists />
      <Albums />
    </SitoContainer>
  );
};

export default Home;
