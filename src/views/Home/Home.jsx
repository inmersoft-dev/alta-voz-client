// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";
import Songs from "./Songs/Songs";
import Videos from "./Videos/Videos";
import NewAlbums from "./NewAlbums/NewAlbums";
import LastNews from "./LastNews/LastNews";
import Concerts from "./Concerts/Concerts";
import Events from "./Events/Events";
import TopPlaylists from "./TopPlaylists/TopPlaylists";
import Discover from "./Discover/Discover";
import Artists from "./Artists/Artists";
import NewProducts from "./NewProducts/NewProducts";
// import CatchToAction from "./CatchToAction/CatchToAction";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <NewAlbums />
      <LastNews />
      <Songs />
      <Videos />
      <Concerts />
      <Events />
      <TopPlaylists />
      <Discover />
      <NewProducts />
      <Artists />

      {/* <CatchToAction /> */}
    </SitoContainer>
  );
};

export default Home;
