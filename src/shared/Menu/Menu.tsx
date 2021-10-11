import { useState } from 'react';

import { MenuProps } from './Menu.models';
import { MenuWrapper, ItemsWrapper } from './Menu.styles';

export function Menu<T>({
  items,
  triggerFactory,
  className,
  onItemClick,
}: MenuProps<T>) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const trigger = triggerFactory();

  return (
    <MenuWrapper
      onClickCapture={() => {
        setMenuOpen(true);
      }}
      tabIndex={0}
      onBlur={() => setMenuOpen(false)}
      className={className}
    >
      {trigger}
      {isMenuOpen && (
        <ItemsWrapper>
          {items.map(({ id, name }) => (
            <div
              className='menu-item'
              onClick={(event) => {
                setMenuOpen(false);
                onItemClick(id, event);
              }}
              key={`${id}`}
            >
              {name}
            </div>
          ))}
        </ItemsWrapper>
      )}
    </MenuWrapper>
  );
}
