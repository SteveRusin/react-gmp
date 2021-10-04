import { SelectPropsMultiple } from './Select.models';

export function isMultiSelect<TId>(props: any): props is SelectPropsMultiple<TId> {
  return (props as SelectPropsMultiple<TId>).multi;
}
