import { useEffect, useState } from "react";

function useCityInfo(selectedState) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json`)
      .then((res) => res.json())
      .then((res) => {
        const indianCities = res
          .filter((city) => city.country_name === 'India' && city.state_name === selectedState)
          .map((city) => city.name);
        const uniqueCities = Array.from(new Set(indianCities));

        setCities(uniqueCities);
      });
  }, [selectedState]);

  return cities;
}

export default useCityInfo;
