export enum MovieGenre {
  ActionAdventure = 'Action & Adventure',
  Drama = 'Drama',
  Biography = 'Biography',
  Music = 'Music',
  OscarWining = 'Oscar Wining',
}

export interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  genre: MovieGenre[];
  coverUrl: string;
  rating: number;
  runtime: number;
  description: string;
}
