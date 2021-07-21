import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { CampaignContext } from "./utils/campaignContext";


function App() {
  const campaigns = useContext(CampaignContext)
  return (
    <div className="App">
      {console.log(campaigns)}
      Hey!
    </div>
  );
}

export default App;
