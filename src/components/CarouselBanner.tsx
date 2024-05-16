import CarouselImg from "../models/carouselImg.ts";

function CarouselBanner({ baner }: { baner: CarouselImg }) {
  return (
            <img
              src={baner.picture}
              className="w-full h-carrousel-min"
              alt={baner.name}
            />
  );
}
export default CarouselBanner;
