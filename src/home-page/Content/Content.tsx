import { PureComponent } from 'react';

import { fetchMovies } from '@api/Movies';

import { ContentWrapper } from './ContentWrapper';

import { ControlsWrapper } from './Controls';
import { MoviesWrapper } from './Movies';
import { SORT_OPTIONS, SortOptions } from './Content.constants';
import { SORT_MAP } from './Content.helpers';
import { ContentState } from './Content.models';

export class Content extends PureComponent<unknown, ContentState> {
  state: ContentState = {
    sortOptions: SORT_OPTIONS,
    sortBy: null,
    movies: fetchMovies(),
    sortedMovies: null,
  };

  private sortMovies = (sortBy: SortOptions) => {
    if (sortBy == null) {
      this.setState({
        ...this.state,
        sortBy: sortBy,
        sortedMovies: null,
      });

      return;
    }

    const movieCopy = [...this.state.movies];

    this.setState({
      ...this.state,
      sortBy: sortBy,
      sortedMovies: movieCopy.sort(SORT_MAP[sortBy]),
    });
  };

  render() {
    return (
      <ContentWrapper>
        <ControlsWrapper
          sortBy={this.state.sortBy}
          options={this.state.sortOptions}
          optionSelected={this.sortMovies}
        />
        <span>
          <b>{this.state.movies.length}</b> movies found
        </span>
        <MoviesWrapper movies={this.state.sortedMovies || this.state.movies} />
      </ContentWrapper>
    );
  }
}
