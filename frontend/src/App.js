import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from './components/Navbar';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <MyNavbar />
      <p>Holi tu puedes!</p>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>data form backend</p>}
    </Router>
  );
}

export default App;
