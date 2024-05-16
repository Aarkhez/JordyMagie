import CarouselBanner from "./CarouselBanner.tsx";
import CarouselImg from "../models/carouselImg.ts";
import CAROUSELIMG from "../models/mock-carouselImg.ts";
import { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";

function CarouselHome() {
  const [baners, setBaner] = useState<CarouselImg[]>([]);

  useEffect(() => {
    setBaner(CAROUSELIMG);
  }, []);

  return (
    <Carousel
      transition={{ duration: 2 }}
      className="rounded-xl max-w-7xl mx-auto mt-8"
      placeholder={null}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      autoplay = {true}
      loop= {true}
    >
      {baners.map((baner) => (
        <CarouselBanner key={baner.id} baner={baner} />
      ))}
    </Carousel>
  );
}
export default CarouselHome;
