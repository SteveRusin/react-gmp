import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AppRoot } from './AppRoot';
import { createStore } from '@store';

ReactDOM.hydrate(
  <AppRoot Router={BrowserRouter} store={createStore(window.ROOT_STATE! || undefined)} />,
  document.querySelector('#root')
);

window.ROOT_STATE = null;
