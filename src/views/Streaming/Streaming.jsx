// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";
import Simples from "./Simples/Simples";
import Albums from "./Albums/Albums";
import NewAlbums from "./NewAlbums/NewAlbums";
import NewSimples from "./NewSimples/NewSimples";
import TopCharts from "./TopCharts/TopCharts";
// import CatchToAction from "./CatchToAction/CatchToAction";

const Streaming = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <Simples />
      <Albums />
      <NewAlbums />
      <NewSimples />
      <TopCharts />
      {/* <CatchToAction /> */}
    </SitoContainer>
  );
};

export default Streaming;
