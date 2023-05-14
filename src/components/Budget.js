
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
 const { budget, expenses, dispatch } = useContext(AppContext);
 const [updatedBudget, setUpdatedBudget] = useState(budget);


 useEffect(() => {
   setUpdatedBudget(budget);
 }, [budget]);


 useEffect(() => {
   const totalExpenses = expenses.reduce((total, item) => {
     return (total += item.cost);
   }, 0);


   const remainingBudget = updatedBudget - totalExpenses;
   dispatch({
     type: 'SET_REMAINING',
     payload: remainingBudget,
   });


   if (updatedBudget > 20000) {
     alert('Budget cannot exceed 20,000!');
   }


   if (updatedBudget < totalExpenses) {
     alert('Expenses value exceed the budget!');
   }
 }, [updatedBudget, expenses, dispatch]);


 const handleBudgetChange = (event) => {
   const value = parseInt(event.target.value);
   if (!isNaN(value)) {
     setUpdatedBudget(value);
   }
 };


 return (
   <div className='alert alert-secondary'>
     <div className='input-group'>
       <div className='input-group-prepend'>
         <span className='input-group-text'>Budget:</span>
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
