export default class New {
  id: number;
  name: string;
  picture: string;
  description: string;
  date: Date;

  constructor(
    id: number = 0,
    name: string = "",
    picture: string = "",
    description: string = "",
    date: Date = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.description = description;
    this.date = date;
  }
}
