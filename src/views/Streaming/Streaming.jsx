// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";
import TrendingSimples from "./TrendingSimples/TrendingSimples";
import TrendingAlbums from "./TrendingAlbums/TrendingAlbums";
import NewAlbums from "./NewAlbums/NewAlbums";
import NewSimples from "./NewSimples/NewSimples";
import TopCharts from "./TopCharts/TopCharts";
import Recommendations from "./Recommendations/Recommendations";
import MostNotable from "./MostNotable/MostNotable";
import Artists from "./Artists/Artists";
import TopPlaylists from "./TopPlaylists/TopPlaylists";
import TopVideos from "./TopVideos/TopVideos";
import Moods from "./Moods/Moods";
import Discover from "./Discover/Discover";
// import CatchToAction from "./CatchToAction/CatchToAction";

const Streaming = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <TrendingSimples />
      <TrendingAlbums />
      <NewAlbums />
      <NewSimples />
      <TopCharts />
      <Recommendations />
      <MostNotable />
      <Artists />
      <TopPlaylists />
      <TopVideos />
      <Moods />
      <Discover />
      {/* <CatchToAction /> */}
    </SitoContainer>
  );
};

export default Streaming;
