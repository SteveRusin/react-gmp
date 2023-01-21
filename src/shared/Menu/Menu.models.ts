import { ReactElement, MouseEvent, HtmlHTMLAttributes } from 'react';

export interface MenuItems<T> {
  id: T;
  name: string;
}

export interface MenuProps<T> extends HtmlHTMLAttributes<unknown> {
  items: MenuItems<T>[];
  onItemClick: (id: T, event: MouseEvent<HTMLDivElement, any>) => void;
  triggerFactory: () => ReactElement;
}
