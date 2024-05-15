import AuBureauImg from "../assets/actus_img/au-bureau.jpg";
import JournalImg from "../assets/actus_img/journal.jpg";
import TiktokInstagramImg from "../assets/actus_img/tiktok-instagram.jpg";

function Home() {
  return (
    <div>
      {/* Carousel - Large */}
      <div
        id="bannierelarge"
        className="carousel slide banniere-lg"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src/banniere_img/ban1.png"
              className="w-full h-carrousel-min"
              alt="Image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="src/banniere_img/ban2.png"
              className="w-full h-carrousel-min"
              alt="Image 2"
            />
          </div>
          {/* Ajoutez d'autres diapositives ici */}
        </div>

        {/* Contrôles de navigation */}
        <a
          className="carousel-control-prev"
          href="#bannierelarge"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Précédent</span>
        </a>
        <a
          className="carousel-control-next"
          href="#bannierelarge"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Suivant</span>
        </a>
      </div>

      {/* Carousel - Small */}
      <div
        id="bannieresmall"
        className="carousel slide banniere-sm"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src/banniere_img/ban1-tel.png"
              className="w-full h-carrousel-min"
              alt="Image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="src/banniere_img/ban2-tel.png"
              className="w-full h-carrousel-min"
              alt="Image 2"
            />
          </div>
          {/* Ajoutez d'autres diapositives ici */}
        </div>

        {/* Contrôles de navigation */}
        <a
          className="carousel-control-prev"
          href="#bannieresmall"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Précédent</span>
        </a>
        <a
          className="carousel-control-next"
          href="#bannieresmall"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Suivant</span>
        </a>
      </div>

      {/* Section des actualités */}
      <section className="container mx-auto mt-8">
        <h2 className="text-center mb-4 font-bold text-xl">
          Nos Dernières actualités
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src={JournalImg}
              className="w-full h-64 object-cover"
              alt="journal"
            />
            <div className="p-4">
              <div className="text-sm text-gray-600">11 janvier 2023</div>
              <h3 className="font-bold text-lg mt-2">
                Passage dans le journal "Le Régional"
              </h3>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src={AuBureauImg}
              className="w-full h-64 object-cover"
              alt="au-bureau"
            />
            <div className="p-4">
              <div className="text-sm text-gray-600">25 octobre 2023</div>
              <h3 className="font-bold text-lg mt-2">
                Premier contrat signé avec "Au Bureau"
              </h3>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src={TiktokInstagramImg}
              className="w-full h-64 object-cover"
              alt="réseaux"
            />
            <div className="p-4">
              <div className="text-sm text-gray-600">8 octobre 2023</div>
              <h3 className="font-bold text-lg mt-2">
                Création de mes réseaux sociaux
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
