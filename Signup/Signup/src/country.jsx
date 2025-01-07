// import React from 'react'
// import { useState, useEffect } from 'react';

// function Country() {
//     const [countries, setCountries] = useState([]);
//     const [search, setSearch] = useState('');
  
//     // Fetch country data on component mount
//     useEffect(() => {
//       const fetchCountries = async () => {
//         try {
//           const response = await fetch('https://restcountries.com/v3.1/all');
//           if (!response.ok) throw new Error('Network response was not ok');
//           const data = await response.json();
//           const countryNames = data.map((country) => country.name.common);
//           setCountries(countryNames.sort()); // Sort alphabetically
//         } catch (error) {
//           console.error('Error fetching country data:', error);
//         }
//       };
  
//       fetchCountries();
//     }, []);

//     return (


//         <div>
//       <label htmlFor="country-input">Select a country:</label>
//       <input
//         id="country-input"
//         list="country-list"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Type a country name"
//       />
//       <datalist id="country-list">
//         {countries.map((country, index) => (
//           <option key={index} value={country} />
//         ))}
//       </datalist>
//     </div>
        
//     )
// }

// export default Country

