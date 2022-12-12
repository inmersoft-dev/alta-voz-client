// sito components
import SitoContainer from "sito-container";

// sections
import Hero from "./Hero/Hero";
import Simples from "./Simples/Simples";
// import CatchToAction from "./CatchToAction/CatchToAction";

const Streaming = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <Simples />

      {/* <CatchToAction /> */}
    </SitoContainer>
  );
};

export default Streaming;
