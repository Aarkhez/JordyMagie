import Service from "./../models/service.ts";
import SERVICES from "./../models/mock-services.ts";
import ServiceCard from "./ServiceCard.tsx";
import { useEffect, useState } from "react";

function ServicesContainer() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    setServices(SERVICES);
  }, []);

  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-center font-bold text-3xl">Nos Services</h2>
      <hr className="my-6 mx-40 border-gray-500" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
export default ServicesContainer;
