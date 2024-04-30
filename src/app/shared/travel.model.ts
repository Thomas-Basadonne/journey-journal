export class Travel {
  public id: number;
  public place: string;
  public duration: number;
  public imagePath: string;
  public startDate: Date;
  public endDate: Date;
  public traveler: string;
  public description: string;

  constructor(
    id: number,
    place: string,
    duration: number,
    imagePath: string,
    startDate: Date,
    endDate: Date,
    traveler: string,
    description: string
  ) {
    this.id = id;
    this.place = place;
    this.duration = duration;
    this.imagePath = imagePath;
    this.startDate = startDate;
    this.endDate = endDate;
    this.traveler = traveler;
    this.description = description;
  }
}
