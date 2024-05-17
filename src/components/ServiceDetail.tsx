import { Link, useParams } from "react-router-dom";
import SERVICES from "./../models/mock-services.ts";

function ServiceDetail() {
  const { id } = useParams<{ id: string }>();

  // Convertir l'ID en un nombre entier
  const serviceId = Number(id);

  // Rechercher le service correspondant à l'ID dans la liste SERVICES
  const service = SERVICES.find((service) => service.id === serviceId);

  // Si le service n'est pas trouvé, afficher un message d'erreur
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="font-sans bg-white">
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
              <img
                src={service.picture}
                alt={service.name}
                className="rounded object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-2 h-full">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div>
                  <h2 className="text-2xl font-extrabold text-[#333]">
                    {service.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <p className="text-[#333] text-xl font-bold">
                      {service.price}
                    </p>
                  </div>
                  <p className="mt-3" style={{ whiteSpace: "pre-line" }}>
                    {service.longDescription || service.shortDescription}
                  </p>
                </div>
              </div>
              <Link to="/contact">
                <button className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Contactez-moi
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServiceDetail;
