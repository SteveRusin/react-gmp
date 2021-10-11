import { FC } from 'react';

import { Logo } from '@shared';

import { HeaderTopProps } from './HeaderTop.models';
import { Wrapper, BackToSearch, AddMovie } from './HeaderTop.styles';

export const HeaderTopWrapper: FC<HeaderTopProps> = ({
  onAddMovie,
  onBackToSearch,
  showBackToSearchIcon,
}) => {
  return (
    <Wrapper>
      <Logo />
      {showBackToSearchIcon ? (
        <BackToSearch onClick={onBackToSearch} size='24'></BackToSearch>
      ) : (
        <AddMovie onClick={onAddMovie}> + ADD MOVIE </AddMovie>
      )}
    </Wrapper>
  );
};
