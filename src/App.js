import './App.css';
import React, { useState } from 'react';
import Signin from './Components/Signin/Signin';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  const [loggedin, setLoggedin] = useState(true);
  return (
    <div className="App">
      {loggedin ?
        <Dashboard/>:
        <Signin setLoggedin={setLoggedin} />}
    </div>
  );
}

export default App;
