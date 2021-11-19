import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Movie, useMovieSearch } from '@api/Movies';
import { MovieDetailsContext, NotFoundPage } from '@shared';
import { moviesSelector } from '@store';

import { HomePage } from './home-page';

export default function App() {
  const movies = useSelector(moviesSelector);
  const history = useHistory();
  const { movieId, urlSearchParams } = useMovieSearch();

  const movieWithDetails =
    movieId == null ? null : movies.find(({ id }) => id === movieId)!;

  const setMovieWithDetails = (movie: Movie | null) => {
    if (movie) {
      urlSearchParams.set('movie', movie.id.toString());
    } else {
      urlSearchParams.delete('movie');
    }

    history.replace({
      search: urlSearchParams.toString(),
    });
  };

  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/search'></Redirect>
      </Route>
      <Route path='/search/:searchQuery?'>
        <MovieDetailsContext.Provider
          value={{
            movie: movieWithDetails,
            showMovieDetails: setMovieWithDetails,
          }}
        >
          <HomePage></HomePage>
        </MovieDetailsContext.Provider>
      </Route>
      <Route path='*'>
        <NotFoundPage></NotFoundPage>
      </Route>
    </Switch>
  );
}
