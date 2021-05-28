import React from 'react';
import Stocks from "./components/Stocks";
import {useAppSelector} from "./redux/store";
import Spinner from "./components/Spinner";

function App() {
  const loading = useAppSelector((state) => state.base.loading);
  
  return (
    <div className="App">
      <header>Portfolio analyzer</header>
      {loading && <Spinner />}
      <Stocks />
    </div>
  );
}

export default App;
