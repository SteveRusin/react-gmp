import AvengersCover from '@assets/avengers.jpg';
import RhapsodyCover from '@assets/bohemian-rhapsody.png';
import InceptionCover from '@assets/inception.png';
import KillBillCover from '@assets/kill-bill.png';
import PulpFiction from '@assets/pulp-fiction.png';

import { Movie, MovieGenre } from './Movie.models';

// no async api call for now
// just return mocked list
export function fetchMovies(): Movie[] {
  return [
    {
      title: 'Pulp Fiction',
      genre: [MovieGenre.ActionAdventure],
      coverUrl: PulpFiction,
      releaseDate: '2004',
    },
    {
      title: 'Bohemian Rhapsody',
      genre: [MovieGenre.Drama, MovieGenre.Biography, MovieGenre.Music],
      coverUrl: RhapsodyCover,
      releaseDate: '2003',
    },
    {
      title: 'Kill Bill: Vol2',
      genre: [MovieGenre.OscarWining],
      coverUrl: KillBillCover,
      releaseDate: '1994',
    },
    {
      title: 'Avengers: War of infinity',
      genre: [MovieGenre.ActionAdventure],
      coverUrl: AvengersCover,
      releaseDate: '2004',
    },
    {
      title: 'Inception',
      genre: [MovieGenre.ActionAdventure],
      coverUrl: InceptionCover,
      releaseDate: '2004',
    },
  ];
}
