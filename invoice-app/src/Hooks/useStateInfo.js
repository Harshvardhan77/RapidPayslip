import { useEffect, useState } from "react";

function useStateInfo() {
  const [state, setState]= useState([]);
  
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json`)
      .then((res) => res.json())
      .then((res) => {
        const indiaStates = res
          .filter((state) => state.country_name === 'India')
          .map((state) => state.name);
        const uniqueCities = Array.from(new Set(indiaStates));
        
        setState(uniqueCities);
      });
  }, []);

  return state;
}

export default useStateInfo;
