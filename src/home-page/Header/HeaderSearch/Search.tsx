import { Input, ButtonPrimary } from '@shared';

export const Search = () => {
  return (
    <>
      <Input
        className='search-input'
        type='text'
        placeholder='What do you want to watch'
      />
      <ButtonPrimary className='search-button'>SEARCH</ButtonPrimary>
    </>
  );
};
