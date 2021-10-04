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
      id: '1',
      title: 'Pulp Fiction',
      genre: [MovieGenre.ActionAdventure],
      coverUrl: PulpFiction,
      releaseDate: '2004-09-30T14:33:17Z',
      rating: 5,
      runtime: 103,
      description: getMockedDescription(),
    },
    {
      id: '2',
      title: 'Bohemian Rhapsody',
      genre: [MovieGenre.Drama, MovieGenre.Biography, MovieGenre.Music],
      coverUrl: RhapsodyCover,
      releaseDate: '2003-09-30T14:33:17Z',
      rating: 10,
      runtime: 120,
      description: getMockedDescription(),
    },
    {
      id: '3',
      title: 'Kill Bill: Vol2',
      genre: [MovieGenre.OscarWining],
      coverUrl: KillBillCover,
      releaseDate: '1994-09-30T14:33:17Z',
      rating: 9,
      runtime: 100,
      description: getMockedDescription(),
    },
    {
      id: '4',
      title: 'Avengers: War of infinity',
      genre: [MovieGenre.ActionAdventure],
      coverUrl: AvengersCover,
      releaseDate: '2004-09-30T14:33:17Z',
      rating: 8,
      runtime: 153,
      description: getMockedDescription(),
    },
    {
      id: '5',
      title: 'Inception',
      genre: [MovieGenre.ActionAdventure],
      coverUrl: InceptionCover,
      releaseDate: '2005-09-30T14:33:17Z',
      rating: 9,
      runtime: 134,
      description: getMockedDescription(),
    },
  ];
}

function getMockedDescription() {
  return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
}
