export interface ICard {
  title: String;
  subtitle: String;
  image: String;
}

export interface ICardSection {
  title: String;
  seeMore: String;
  cards: Array<ICard>;
}
