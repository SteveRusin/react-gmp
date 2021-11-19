import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { movieReducer } from './movie.slice';
import { rootSaga } from './saga';
import { RootState } from './store.models';

const sagaMiddleware = createSagaMiddleware();

export function createStore(preloadedState?: RootState) {
  const store = configureStore({
    reducer: {
      movie: movieReducer,
    },
    middleware(defaultMiddleware) {
      return [...defaultMiddleware({ thunk: false }), sagaMiddleware];
    },
    preloadedState,
  });
  sagaMiddleware.run(rootSaga);

  return store;
}

/* export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware(defaultMiddleware) {
    return [...defaultMiddleware({ thunk: false }), sagaMiddleware];
  },
  // preloadedState: {
  //   movie: {
  //     totalAmount: 25,
  //     error: null,
  //     limit: 3000,
  //     offset: 0,
  //     status: MoviesStatus.LoadingSucceed,
  //     movies: [
  //       {
  //         id: 1,
  //         coverUrl: '122',
  //         description: '1232',
  //         genre: [],
  //         rating: 25,
  //         releaseDate: '2020',
  //         runtime: 125,
  //         title: 'test'
  //       }
  //     ]
  //   }
  // }
}); */
