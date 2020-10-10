import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
// COMPONENT IMPORTS
import NavBar from './components/NavBar.jsx';
import DashboardContainer from './components/DashboardContainer.jsx';
// SCSS
import '../public/scss/application.scss';
// import new dummy data
import dummyData from '../server/sampleDataShape';
function App() {
  let [ready, setReady] = useState(false);
  let [aqlData, setAqlData] = useState({});

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setAqlData(data))
      .then(() => setReady(true))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <NavBar />
      {ready && (
        <DashboardContainer
          dummyData={dummyData}
          data={aqlData}
          mutationData={aqlData.mutations}
          resolverStats={aqlData.resolverStats}
        />
      )}
    </div>
  );
}
export default App;