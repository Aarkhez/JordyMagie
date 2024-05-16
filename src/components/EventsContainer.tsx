import New from "./../models/new.ts";
import NEWS from "./../models/mock-news.ts";
import EventCard from "./EventCard.tsx";
import { useEffect, useState } from "react";

function EventContainer () {
    
  const [news, setNews] = useState<New[]>([]);

  useEffect(() => {
    setNews(NEWS);
  }, []);

  return (
    <section className="container mx-auto mt-8">
        <h2 className="text-center font-bold text-3xl">
          Nos Dernières actualités
        </h2>
        <hr className="my-6 mx-40 border-gray-500" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {news.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
  )
}
export default EventContainer;