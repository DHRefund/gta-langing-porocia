import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./sections/NavBar";
import NavBar2 from "./sections/NavBar2";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/Lucia";
import PostCard from "./sections/PostCard";
import Final from "./sections/Final";
import Outro from "./sections/Outro";
import Outro2 from "./sections/Outtro2";
import CarsShowcase from "./sections/CarsShowcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      {/* <NavBar /> */}
      <NavBar2 />
      <Hero />

      <FirstVideo />
      <Jason />

      <SecondVideo />
      <Lucia />
      <CarsShowcase />

      <PostCard />
      <Final />
      {/* <Outro /> */}
      <Outro2 />
    </main>
  );
};

export default App;
