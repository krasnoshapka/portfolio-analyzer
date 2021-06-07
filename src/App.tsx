import React, {useEffect} from 'react';
import Stocks from "./components/Stocks";
import {useAppDispatch, useAppSelector} from "./redux/store";
import Spinner from "./components/Spinner";

function App() {
  const {loading} = useAppSelector((state) => state.base);
  const {portfolio} = useAppSelector((state) => state.stocks);
  const dispatch = useAppDispatch();
  
  useEffect( () => {
    dispatch({type: 'getPortfolioData', payload: portfolio});
  }, [portfolio]);
  
  const handleLoading = () => {
    if (loading) {
      dispatch({type: 'cancelOngoingRequest'});
    } else {
      dispatch({type: 'getPortfolioData', payload: portfolio});
    }
  }
  
  return (
    <div className="App">
      <header>Portfolio analyzer</header>
      <div className='loader'>
        <button name="load" onClick={handleLoading}>{loading ? 'Cancel loading' : 'Reload'}</button>
        {loading && <Spinner />}
      </div>
      <Stocks />
    </div>
  );
}

export default App;
