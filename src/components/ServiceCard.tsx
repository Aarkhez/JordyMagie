import Service from "../models/service.ts";
import Card from "./Card.tsx";
import { Link } from "react-router-dom";

function ServiceCard({ service }: { service: Service }) {
  return (
    <>
      <Link to={`/service/${service.id}`}>
        <Card
          styleCard="bg-gray-100 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300"
          title={service.title}
          imageUrl={service.picture}
          altText={service.name}
          showImage={true}
          styleTitle="text-xl font-bold"
          children={
            <div>
              <h3 className="text-gray-800 text-lg mt-2">
                {service.shortDescription}
              </h3>
              <p className="font-bold mt-2">{service.price}</p>
              <Link to={`/service/${service.id}`}>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Détails
                </button>
              </Link>
            </div>
          }
        />
      </Link>
    </>
  );
}
export default ServiceCard;
