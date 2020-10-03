import React from 'react';
import './App.css';
import {Home} from "./components"
import {dataApi} from "./utils"

function App() {
  console.log(dataApi)
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
