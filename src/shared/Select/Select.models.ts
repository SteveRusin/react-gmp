import { type } from 'os';

export interface SelectOption<TId> {
  id: TId;
  name: string;
}

interface SelectPropsBase<TId> {
  options: SelectOption<TId>[];
  placeholder?: string;
}

export interface SelectPropsSingle<TId> extends SelectPropsBase<TId> {
  value?: TId | null;
  onSelect: (optionId: TId) => void;
}

export interface SelectPropsMultiple<TId> extends SelectPropsBase<TId> {
  multi: true;
  value?: TId[] | null;
  onSelect: (optionId: TId[]) => void;
}

export type SelectProps<TId> =
  | SelectPropsSingle<TId>
  | SelectPropsMultiple<TId>;

export interface SelectState<TId> {
  isOpen: boolean;
  selectedOptions: Set<TId>;
}
