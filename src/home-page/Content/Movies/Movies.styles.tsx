import styled from 'styled-components';
import { transparentize } from 'polished';
import { KebabHorizontal } from '@styled-icons/octicons';

export const Wrapper = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, 320px);
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 13px;
  cursor: pointer;
  position: relative;

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
    border: 1px solid
      ${({ theme }) => transparentize(0.5, theme.palette.textPrimary)};
    border-radius: 4px;
  }

  &:hover,
  &:focus-within {
    .movie-menu-trigger {
      opacity: 1;
      transition: opacity 100ms linear;
    }
  }

  .movie-menu {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
  }
`;

export const MovieContextMenuTrigger = styled(KebabHorizontal)`
  color: #fff;
  padding: 7px;
  height: 36px;
  width: 36px;
  background-color: ${({ theme }) => theme.palette.accent};
  border-radius: 100%;
  opacity: 0;
  transform: rotate(0.25turn);
`;
