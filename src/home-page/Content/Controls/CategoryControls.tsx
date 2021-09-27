import { ButtonBase } from '@shared';

export const CategoryControls = () => {
  return (
    <>
      <ButtonBase className='category-button'>ALL</ButtonBase>
      <ButtonBase className='category-button'>DOCUMENTARY</ButtonBase>
      <ButtonBase className='category-button'>COMEDY</ButtonBase>
      <ButtonBase className='category-button'>HORROR</ButtonBase>
      <ButtonBase className='category-button'>CRIME</ButtonBase>
    </>
  );
};
