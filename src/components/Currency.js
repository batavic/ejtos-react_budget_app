import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {

 const { currency, dispatch } = useContext(AppContext);
 
 const handleCurrencyChange = (event) => {

   const selectedCurrency = event.target.value;
   
   dispatch({
     type: 'CHG_CURRENCY',
     payload: selectedCurrency,
   });

 };


 return (
   <div className='alert alert-secondary'>
    <div class="custom-select">
        <select id='currency' value={currency} onChange={handleCurrencyChange} className='lime-background'>
        <option value='default' disabled hidden>{`Currency (${currency} Pound)`}</option>
        <option value='$' name="Dollar">$ Dollar</option>
        <option value='£' name="Pound">£ Pound</option>
        <option value='€' name="Euro">€ Euro </option>
        <option value='₹' name="Rupee">₹ Rupee</option>
        </select>
     </div>
   </div>
 );
};

export default Currency;
