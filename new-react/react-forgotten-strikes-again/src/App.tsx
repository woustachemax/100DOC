

// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [tempCelcius, setTempCelcius] = useState<number>(0);
//   const [tempFar, setTempFar] = useState<number>(0);

//   // Function to convert Celsius to Fahrenheit
//   const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const celsius = parseFloat(e.target.value);
//     setTempCelcius(celsius);
//     setTempFar((celsius * 9/5) + 32);  // Convert Celsius to Fahrenheit
//   };

//   // Function to convert Fahrenheit to Celsius
//   const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const fahrenheit = parseFloat(e.target.value);
//     setTempFar(fahrenheit);
//     setTempCelcius((fahrenheit - 32) * 5/9);  // Convert Fahrenheit to Celsius
//   };

//   return (
//     <>
//       <input 
//         type="number" 
//         value={tempCelcius} 
//         onChange={handleCelsiusChange} 
//       />
//       <span>°C</span>
      
//       <input 
//         type="number" 
//         value={tempFar} 
//         onChange={handleFahrenheitChange} 
//       />
//       <span>°F</span>

//       <TemperatureStatus tempCelcius={tempCelcius} />
//     </>
//   );
// }

// // Temperature Status component
// const TemperatureStatus: React.FC<{ tempCelcius: number }> = ({ tempCelcius }) => {
//   let status = "Normal";
//   if (tempCelcius <= 0) status = "Freezing";
//   else if (tempCelcius >= 100) status = "Boiling";

//   return <h3>{status}</h3>;
// };

// export default App;
