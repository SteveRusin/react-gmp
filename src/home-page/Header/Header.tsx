import { HeaderTopWrapper } from './HeaderTop';
import { SearchWrapper } from "./HeaderSearch";
import { HeaderWrapper } from "./HeaderWrapper";

export const HomePageHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderTopWrapper />
      <SearchWrapper />
    </HeaderWrapper>
  );
};
