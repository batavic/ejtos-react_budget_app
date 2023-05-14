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
   <div>
     <label htmlFor='currency'>Select Currency:</label>
     <select id='currency' value={currency} onChange={handleCurrencyChange}>
       <option value={currency}>{`Currency: ${currency}`}</option>
       <option value='$'>option1</option>
       <option value='£'>option2</option>
       <option value='€'>option3</option>
       <option value='₹'>option4</option>
     </select>
   </div>
 );
};
