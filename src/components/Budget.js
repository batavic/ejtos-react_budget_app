
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
 const { budget, expenses, dispatch } = useContext(AppContext);
 const [updatedBudget, setUpdatedBudget] = useState(budget);
 const {currency} = useContext(AppContext);


 useEffect(() => {
   setUpdatedBudget(budget);
 }, [budget]);


 useEffect(() => {
   const totalExpenses = expenses.reduce((total, item) => {
     return (total += item.cost);
   }, 0);


   if (updatedBudget > 20000) {
     alert('Budget cannot exceed 20,000!');
   }


   if (updatedBudget < totalExpenses) {
     alert('Expenses value exceed the budget!');
   }
 }, [updatedBudget, expenses, dispatch]);


 const handleBudgetChange = (event) => {
   const value = parseInt(event.target.value);
   dispatch({
    type: 'SET_BUDGET',
    payload: value,
  });
 };


 return (
   <div className='alert alert-secondary'>
     <div className='input-group'>
       <div className='input-group-prepend'>
         <span className='input-group-text'>Budget: {currency}</span>
       </div>
       <input
         type='number'
         className='form-control'
         value={updatedBudget}
         onChange={handleBudgetChange}
         step={10}
         max={20000}
       />
     </div>
   </div>
 );
};


export default Budget;
