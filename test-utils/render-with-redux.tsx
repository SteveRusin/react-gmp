import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';

export function renderWithRedux<TComponent extends JSX.Element, SType>(
  component: TComponent,
  store: Store<SType, AnyAction>,
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
}
