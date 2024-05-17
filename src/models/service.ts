export default class Service {
  id: number;
  name: string;
  title: string;
  picture: string;
  longDescription: string;
  shortDescription: string;
  price: string;

  constructor(
    id: number = 0,
    name: string = "",
    title: string = "",
    picture: string = "",
    shortDescription: string = "",
    longDescription: string = "",
    price: string = ""
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.picture = picture;
    this.longDescription = longDescription;
    this.shortDescription = shortDescription;
    this.price = price;
  }
}
