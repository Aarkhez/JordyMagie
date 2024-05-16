export default class CarouselImg {
  id: number;
  picture: string;
  name: string;

  constructor(
    id: number = 0,
    picture: string = "",
    name: string = ""
  ) {
    this.id = id;
    this.picture = picture;
    this.name = name;
  }
}