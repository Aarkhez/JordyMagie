import CarouselHome from "../components/CarouselHome.tsx";
import EventContainer from "../components/EventsContainer.tsx";
import { AboutPage } from "../utils/utils.ts";

function Home() {
  AboutPage("Accueil");
  return (
    <div>
      <CarouselHome />
      <EventContainer />
    </div>
  );
}

export default Home;
