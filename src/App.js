import React, { useState, useEffect } from 'react';
import Calculator from './Calculator';
import Results from './Results';
import { useMediaQuery } from 'react-responsive';
import './App.css';

function App() {

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  const [page, setPage] = useState('calculator');
  const [hatavot, setHatavot] = useState([]);
  const [days, setDays] = useState(0);

  // passes the hatavot from calculator to results page
  const handlePageChange = (hatavot) => {
    if (page === 'calculator'){
      setPage('results');
      setHatavot(hatavot);
    } else
      setPage('calculator');
  };

  // passes the total days in ishpuz from calculator to results page
  const setTotalDays = (total) => {
    setDays(total);
  };

  return (
    <div className="App">
      {page === 'calculator' && <Calculator changePage={handlePageChange} totalDays={setTotalDays}/>}
      {page === 'results' && <Results changePage={handlePageChange} hatavot={hatavot} totalDays={days}/>}
    </div>
  );
}

export default App;
