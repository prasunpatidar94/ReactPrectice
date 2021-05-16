import React, { useEffect, useState } from 'react';

import axios from 'axios';

function App() {

  const [state, setState] = useState("India");
  const [flag, setFlag] = useState("");


  useEffect(() => {
    async function getCountry() {
      const res = await axios.get(`https://restcountries.eu/rest/v2/name/${state}`);
      console.log("information :   ", res);
      setFlag(res.data[0].flag);
    }
    getCountry();
  }, [state]);


  return (
    <>


      <img src={flag} alt="not load" width="400" height="300"></img>
      <h1>Find You country information :  </h1>
      <h3>choose the country name </h3>


      <select value={state} onChange={(event) => { setState(event.target.value) }}>


        <option value="India">India</option>
        <option value="Martinique">Martinique</option>
        <option value="Malta">Malta</option>
        <option value="Liechtenstein">Liechtenstein</option>
        <option value="Jamaica">Jamaica</option>
        <option value="Tuvalu">Tuvalu</option>

      </select>


    </>
  );
}

export default App;
