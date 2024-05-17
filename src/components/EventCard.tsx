import New from "../models/new.ts";
import Card from "./Card.tsx";

function EventCard({ event }: { event: New }) {
  function getFormattedDate(date: Date): string {
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return (
    <>
      <Card
        styleCard="bg-gray-100 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300"
        title={getFormattedDate(event.date)}
        imageUrl={event.picture}
        altText={event.name}
        showImage={true}
        styleTitle="text-sm text-gray-600"
        children={
          <h3 className="font-bold text-lg mt-2">{event.description}</h3>
        }
      />
    </>
  );
}
export default EventCard;
