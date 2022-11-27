// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";
import Songs from "./Songs/Songs";
import Artists from "./Artists/Artists";
import Genres from "./Genres/Genres";
import Albums from "./Albums/Albums";
import CatchToAction from "./CatchToAction/CatchToAction";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <Albums />
      <Artists />
      <Genres />
      <Songs />
      <CatchToAction />
    </SitoContainer>
  );
};

export default Home;
