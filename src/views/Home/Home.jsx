// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";
import Songs from "./Songs/Songs";
import Videos from "./Videos/Videos";
import Albums from "./Albums/Albums";
import Concerts from "./Concerts/Concerts";
import Artists from "./Artists/Artists";
// import CatchToAction from "./CatchToAction/CatchToAction";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <Albums />
      <Songs />
      <Videos />
      <Concerts />
      <Artists />

      {/* <CatchToAction /> */}
    </SitoContainer>
  );
};

export default Home;
