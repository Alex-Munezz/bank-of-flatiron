import React from 'react';

function BankTransaction(props){

    const { transactions } = props;
return(
 <table>
<caption>TRANSACTIONS</caption>
<thead>
  <tr>
    <th className="transaction-date">Date</th>
    <th className="transaction-description">Description</th>
    <th className="transaction-category">Category</th>
    <th className="transaction-amount">Amount</th>
  </tr>
</thead>
 <tbody>
     {transactions?.map((transactions) => (
       <tr key= {transactions.id}>
      <td>{transactions.date}</td>
      <td>{transactions.description}</td>
      <td>{transactions.category}</td>
      <td>{transactions.amount}</td>
</tr> 
     ))}
 </tbody>
</table>
)}

export default BankTransaction;