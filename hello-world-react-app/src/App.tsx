import "./App.css";

import { CounterCreateElement } from "./components/CounterCreateElement";
import { CounterComponent } from "./components/CounterComponent";
import { CounterPureComponent } from './components/CounterPureComponent';
import { CounterFunction } from './components/CounterFunction';

function App() {
  return (
    <>
      <CounterCreateElement />
      <CounterComponent />
      <CounterPureComponent />
      <CounterFunction />
    </>
  );
}

export default App;
