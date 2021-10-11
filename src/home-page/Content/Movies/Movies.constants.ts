import { MenuItems } from '@shared';

export const enum MenuItemsIds {
  EditMovie,
  DeleteMovie,
}

export const MENU_ITEMS: MenuItems<MenuItemsIds>[] = [
  {
    id: MenuItemsIds.EditMovie,
    name: 'Edit',
  },
  {
    id: MenuItemsIds.DeleteMovie,
    name: 'Delete',
  },
];

