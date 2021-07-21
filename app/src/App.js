import React, { useContext } from 'react';
import './App.scss';
import { CampaignContext } from "./utils/campaignContext";
import ThePlugPage from "./components/thePlugPage"


function App() {
  const campaigns = useContext(CampaignContext)
  if(!campaigns) return (<div>Loading...<br/><br/> If nothing happens for a while try refreshing</div>)
  return (
    <div className="App">
      <ThePlugPage campaigns={campaigns} />
    </div>
  );
}

export default App;
