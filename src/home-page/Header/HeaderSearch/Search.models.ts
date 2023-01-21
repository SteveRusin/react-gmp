export interface SearchProps {
  searchValue?: string;
  onSearchValueChange: (val: string) => void;
  onSearch: () => void;
}
