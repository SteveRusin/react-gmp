import styled from 'styled-components';
import { transparentize } from 'polished';

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 13px;
  cursor: pointer;

  .movie-cover {
    display: block;
    height: 465px;
    width: auto;
  }

  .movie-description-container {
    display: flex;
    justify-content: space-between;
  }

  .movie-description-heading {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .movie-title {
    font-size: 1.8rem;
    opacity: 0.7;
  }

  .movie-genre {
    font-size: 1.4rem;
    opacity: 0.5;
  }

  .movie-release-date {
    align-self: flex-start;
    font-size: 1.4rem;
    opacity: 0.7;
    padding: 0.25em 0.5em;
    border: 1px solid ${({theme}) => transparentize(0.5, theme.palette.textPrimary)};
    border-radius: 4px;
  }
`;
