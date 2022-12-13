// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";
import NewAlbums from "./NewAlbums/NewAlbums";
import LastNews from "./LastNews/LastNews";
import NewSimples from "./NewSimples/NewSimples";
import Concerts from "./Concerts/Concerts";
import Events from "./Events/Events";
import TopPlaylists from "./TopPlaylists/TopPlaylists";
import Discover from "./Discover/Discover";
import Artists from "./Artists/Artists";
import NewProducts from "./NewProducts/NewProducts";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <NewAlbums />
      <LastNews />
      <NewSimples />
      <Concerts />
      <Events />
      <TopPlaylists />
      <Discover />
      <NewProducts />
      <Artists />
    </SitoContainer>
  );
};

export default Home;
