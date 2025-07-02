import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';


// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//         {count}
//         <button onClick={() => setCount((count) => count + 1)}>Increment</button>
//       </div>
//   )
// }

function App() {
  const VAT = 0.07;
  const [vat, setVat] = useState(0)
  const [price, setPrice] = useState(0);

  function handleChange(event) {
    let price = event.target.value;
    console.log(price);
    setPrice(price);
    setVat(price * VAT);
  }

  return (
    <>
    <h2>VAT Calculator</h2>
    <div>
      Price:
      <input type="number" placeholder="Enter price"
      onChange={handleChange} />
      <button>Calulate VAT</button>
      <div>
        Price: {price}<br/>
        VAT Rate: {(VAT*100).toFixed(2)}<br/>
        VAT: {vat.toFixed(2)}<br/>
        Total: {(price * (1 + VAT)).toFixed(2)}<br/>
      </div>
    </div>
    </>
  )
}

export default App
