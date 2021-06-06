import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';

import Campaign from './Campaign'

function App() {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('https://www.plugco.in/public/take_home_sample_feed')
      .then((response) => {
        //console.log(response);
        setCampaigns(response.data.campaigns);
      })
      .catch((err) => {
        console.warn(err);
      })
  }, [])

  const buildCampaigns = () => {
    return campaigns.map((camp, i) => {
      return <Campaign key={i} data={camp} />
    });
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        {buildCampaigns()}
      </div>
    </div>
  );
}

export default App;
