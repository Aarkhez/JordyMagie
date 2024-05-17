import New from "./new.ts";
import AuBureauImg from "./../assets/events-img/au-bureau.webp";
import JournalImg from "./../assets/events-img/journal.webp";
import TiktokInstagramImg from "./../assets/events-img/tiktok-instagram.webp";

export const NEWS: New[] = [
  {
    id: 1,
    name: "Au Bureau",
    picture: AuBureauImg,
    description: 'Premier contrat signé avec "Au Bureau"',
    date: new Date("2022-10-26"),
  },
  {
    id: 2,
    name: "Journal",
    picture: JournalImg,
    description: 'Passage dans le journal "Le Régional"',
    date: new Date("2023-01-11"),
  },
  {
    id: 3,
    name: "Tiktok & Instagram",
    picture: TiktokInstagramImg,
    description: "Création de mes réseaux sociaux",
    date: new Date("2023-10-08"),
  },
];

export default NEWS;
