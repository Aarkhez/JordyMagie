import Service from "./service.ts";
import BirthdayImg from "./../assets/services-img/birthday.webp";
import BusinessImg from "./../assets/services-img/business.webp";
import WeddingImg from "./../assets/services-img/wedding.webp";
import RestaurantImg from "./../assets/services-img/restaurant.webp";
import ContractImg from "./../assets/services-img/contract.webp";
import TeachImg from "./../assets/services-img/teach.webp";

export const SERVICES: Service[] = [
  {
    id: 1,
    name: "Birthday",
    title: "Anniversaire",
    picture: BirthdayImg,
    shortDescription:
      "C’est une prestation de close up (de tours rapprochés) mêlant diversion, manipulation de carte et illusion.",
    longDescription:
      "Nos services de magie pour anniversaires sont spécialement conçus pour divertir et captiver vos invités, en créant une atmosphère festive et mémorable.\n\nPourquoi choisir nos prestations de magie pour les anniversaires ?\n\n• Interaction directe avec les invités : Nous nous déplaçons parmi vos invités, offrant des tours de magie à quelques centimètres des yeux de tous. Cette proximité crée une expérience immersive et personnelle, idéale pour susciter l'émerveillement chez les enfants comme chez les adultes.\n\n• Divertissement élégant et sophistiqué : Nos prestations s'intègrent parfaitement à l'ambiance de votre fête d'anniversaire, que ce soit à domicile, dans une salle de fête, ou en extérieur. Nous veillons à ajouter une touche d'élégance et de mystère à votre événement.\n\n• Création de souvenirs durables : Offrir un spectacle de magie contribue à créer des moments inoubliables. Vos invités repartiront avec le sourire et des souvenirs mémorables, renforçant ainsi la magie de votre célébration.\n\n• Adaptabilité et flexibilité : Nous nous adaptons facilement à l'environnement et aux besoins de votre fête d'anniversaire. Que vous ayez un petit groupe intime ou une grande réception, nos prestations sont modulables pour convenir à toutes les configurations.\n\nCe que nos prestations incluent :\n\n• Tours de magie variés et innovants : De la manipulation de cartes aux illusions avec des objets du quotidien, chaque tour est conçu pour surprendre et ravir vos invités.\n\n• Personnalisation des tours : Possibilité d'intégrer des éléments spécifiques à votre fête d'anniversaire ou à un thème particulier, rendant chaque performance unique.\n\n• Interaction et engagement : Nous encourageons activement la participation de vos invités, les impliquant dans les tours pour une expérience encore plus immersive.",
    price: "Prix : 50€/h - 4 à 20 personnes",
  },
  {
    id: 2,
    name: "Business",
    title: "Entreprise",
    picture: BusinessImg,
    shortDescription:
      "C’est une prestation de close up (de tours rapprochés) mêlant, diversion, mentalisme, illusion et téléportation.",
    longDescription:
      "Nos services sont spécialement conçus pour divertir et captiver vos salariés, en créant une atmosphère chaleureuse et conviviale au sein de votre entreprise.\n\nPourquoi opter pour nos services de magie en entreprise ?\n\n• Interaction directe avec vos salariés : Nous nous déplaçons dans votre entreprise, offrant des tours de magie à quelques centimètres des yeux de vos employés. Cette proximité crée une expérience immersive et personnelle, suscitant l'émerveillement.\n\n• Divertissement élégant et sophistiqué : Nos prestations s'intègrent parfaitement à l'ambiance de votre entreprise, que ce soit pendant une pause ou lors d'un événement spécial. Nous veillons à ne pas perturber vos activités tout en ajoutant une touche d'élégance et de mystère.\n\n• Renforcement de la cohésion d'équipe : Offrir un spectacle de magie contribue à créer des moments de convivialité et de partage entre vos salariés. Ils repartiront avec le sourire et des souvenirs mémorables, renforçant ainsi les liens au sein de votre équipe.\n\n• Adaptabilité et flexibilité : Nous nous adaptons facilement à l'environnement et aux besoins de votre entreprise. Que vous ayez un petit bureau ou un grand espace de travail, nos prestations sont modulables pour convenir à toutes les configurations.\n\nCe que nos prestations incluent :\n\n• Tours de magie variés et innovants : De la manipulation de cartes aux illusions avec des objets du quotidien, chaque tour est conçu pour surprendre et ravir vos salariés.\n\n• Personnalisation des tours : Possibilité d'intégrer des éléments spécifiques à votre entreprise ou à un événement particulier, rendant chaque performance unique.\n\n• Interaction et engagement : Nous encourageons activement la participation de vos salariés, les impliquant dans les tours pour une expérience encore plus immersive.",
    price: "Prix : 75€/h",
  },
  {
    id: 3,
    name: "Wedding",
    title: "Mariage",
    picture: WeddingImg,
    shortDescription:
      "C’est une prestation de close up (de tours rapprochés) mêlant, diversion, mentalisme, illusion et téléportation.",
    longDescription:
      "Nos services de magie pour mariages sont spécialement conçus pour divertir et captiver vos invités, en créant une atmosphère élégante et mémorable tout au long de votre événement.\n\nPourquoi choisir nos prestations de magie pour votre mariage ?\n\n• Interaction directe avec les invités : Nous nous déplaçons parmi vos invités, réalisant des tours de magie à quelques centimètres de leurs yeux. Cette proximité crée une expérience immersive et personnelle, idéale pour susciter l'émerveillement et la surprise.\n\n• Divertissement élégant et sophistiqué : Nos prestations s'intègrent parfaitement à l'ambiance de votre mariage, que ce soit lors du cocktail, pendant le repas, ou entre les différentes étapes de la journée. Nous ajoutons une touche d'élégance et de mystère à votre célébration.\n\n• Création de souvenirs durables : Offrir un spectacle de magie contribue à créer des moments inoubliables. Vos invités repartiront avec le sourire et des souvenirs mémorables, renforçant ainsi la magie de votre mariage.\n\n• Adaptabilité et flexibilité : Nous nous adaptons facilement à l'environnement et aux besoins de votre mariage. Que vous ayez un petit comité ou une grande réception, nos prestations sont modulables pour convenir à toutes les configurations.\n\nCe que nos prestations incluent :\n\n• Tours de magie variés et innovants : De la manipulation de cartes aux illusions avec des objets du quotidien, chaque tour est conçu pour surprendre et ravir vos invités.\n\n• Personnalisation des tours : Possibilité d'intégrer des éléments spécifiques à votre mariage ou à un thème particulier, rendant chaque performance unique.\n\n• Interaction et engagement : Nous encourageons activement la participation de vos invités, les impliquant dans les tours pour une expérience encore plus immersive.",
    price: "Prix : 750€/évènement",
  },
  {
    id: 4,
    name: "Restaurant",
    title: "Restaurant",
    picture: RestaurantImg,
    shortDescription:
      "C’est une prestation de close-up (de tours rapprochés) mêlant diversion, mentalisme, illusion et téléportation.",
    longDescription:
      "Mes prestations en restaurant sont conçues pour divertir et captiver vos clients, tout en créant une ambiance chaleureuse et conviviale.\n \nPourquoi choisir mes prestations de magie en restaurant ?\n\n• Interaction directe avec les clients : Je me déplace de table en table, réalisant des tours de magie à quelques centimètres des yeux de vos clients. Cette proximité crée une expérience immersive et personnelle, idéale pour susciter l'émerveillement.\n\n• Divertissement élégant et sophistiqué : Mes prestations sont conçues pour s'intégrer parfaitement à l'ambiance de votre établissement. Que ce soit pendant le repas ou entre les plats, je veille à ne pas perturber le service tout en ajoutant une touche d'élégance et de mystère.\n\n• Renforcement de la fidélité client : Offrir un spectacle de magie contribue à créer des souvenirs durables. Vos clients repartiront avec le sourire et une histoire à raconter, augmentant ainsi la probabilité qu'ils reviennent et recommandent votre restaurant à leurs proches.\n\n• Adaptabilité et flexibilité : Je m'adapte facilement à l'environnement et aux besoins de votre restaurant. Que vous ayez une petite salle intime ou un grand espace de restauration, mes prestations sont modulables pour convenir à toutes les configurations.\n\nCe que mes prestations incluent :\n\n• Tours de close-up variés et innovants : De la manipulation de cartes aux illusions avec des objets du quotidien, chaque tour est conçu pour surprendre et ravir vos clients.\n\n• Personnalisation des tours : Possibilité d'intégrer des éléments spécifiques à votre restaurant ou à un événement particulier, rendant chaque performance unique.\n\n• Interaction et engagement : Je fais participer activement les clients, les impliquant dans les tours pour une expérience encore plus immersive.",
    price: "Prix : 70€/h",
  },
  {
    id: 5,
    name: "Contract",
    title: "Contrat à déterminé",
    picture: ContractImg,
    shortDescription:
      "C’est une prestation de close up (de tours rapprochés) mêlant, diversion, mentalisme, illusion et téléportation.",
    longDescription:
      "Nous déterminerons un contrat clair et avantageux pour des prestations répétées. En collaboration avec vous, nous définirons les termes du contrat afin que toutes vos attentes et exigences soient prises en compte.\n\nNous nous engageons à fournir des contrats détaillés et transparents, où chaque prestation et coût sont clairement définis. Cela évite toute confusion et garantit une compréhension mutuelle des attentes.\n\nNous proposerons des tarifs compétitifs pour des prestations régulières, vous permettant de bénéficier de remises et d'optimiser votre budget tout en recevant des services de qualité.\n\nNous nous adapterons à vos besoins spécifiques, en ajustant les termes du contrat en fonction de la fréquence des prestations et des particularités de chaque service demandé.\n\nEn établissant un contrat détaillé, nous nous assurerons que chaque prestation est réalisée conformément aux standards convenus, garantissant ainsi une qualité constante et une satisfaction continue.\n\nNotre approche inclut :\n\n• Élaboration de contrats personnalisés : Nous créerons des contrats sur mesure qui répondent parfaitement à vos besoins et attentes, en détaillant chaque aspect des prestations fournies.\n\n• Négociation de tarifs : Nous discuterons avec vous pour établir des tarifs justes et adaptés, en tenant compte de la répétition des prestations et des éventuels ajustements nécessaires.\n\n• Suivi et ajustement : Nous assurerons un suivi régulier des prestations et ajusterons les termes du contrat si nécessaire, garantissant ainsi une relation de partenariat continue et fructueuse.",
    price: "Prix : Indéterminé - me contacter",
  },
  {
    id: 6,
    name: "Teach",
    title: "4🍀",
    picture: TeachImg,
    shortDescription:
      "Cette formule vous permet d'avoir des cours particuliers où je vous apprends les bases de la magie et de la diversion.",
    longDescription:
      "Nos cours particuliers de magie sont spécialement conçus pour ceux qui souhaitent apprendre et maîtriser cet art fascinant.\n\nPourquoi choisir nos cours particuliers de magie ?\n\n• Enseignement personnalisé : Chaque cours est adapté à votre niveau et à vos objectifs. Que vous soyez débutant ou que vous ayez déjà une certaine expérience, nous vous guiderons à travers des techniques et des tours qui vous conviennent.\n\n• Flexibilité des horaires : Les cours peuvent être planifiés en fonction de votre emploi du temps, offrant une grande flexibilité pour s'adapter à vos besoins.\n\n• Apprentissage pratique : Vous aurez l'occasion de pratiquer chaque tour et technique sous notre supervision, garantissant une compréhension et une maîtrise complète.\n\n• Développement de compétences : En plus des techniques de magie, nos cours couvrent des aspects importants comme la présentation, la mise en scène et la capacité à captiver votre audience.\n\n• Matériel fourni : Tout le matériel nécessaire pour les cours sera fourni, vous permettant de vous concentrer pleinement sur l'apprentissage.\n\nCe que nos cours incluent :\n\n• Introduction aux bases de la magie : Apprenez les principes fondamentaux et les techniques de base pour commencer votre parcours en magie.\n\n• Tours de close-up et de scène : Maîtrisez une variété de tours, adaptés à des performances rapprochées et sur scène.\n\n• Pratique et feedback : Recevez des conseils personnalisés et des feedbacks constructifs pour améliorer vos compétences à chaque session.\n\n• Support continu : Bénéficiez de notre support continu même en dehors des sessions, avec des ressources et des conseils pour vous aider à progresser.",
    price: "Prix : Indéterminé - me contacter",
  },
];
export default SERVICES;
