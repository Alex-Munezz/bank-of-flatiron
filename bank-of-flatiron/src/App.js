import { useEffect, useState } from "react";
import BankTransaction from "./BankTransaction";
import BankSearchBar from "./BankSearchBar";
import BankForm from "./BankForm";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    setFilteredTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
         <h1>BANK OF FLATIRON</h1>
      <fieldset>
      <BankSearchBar
        transactions={transactions}
        setFilteredTransactions={setFilteredTransactions}
      />
      <BankTransaction transactions={filteredTransactions} />
      </fieldset>
      <fieldset>
      <BankForm addTransaction={addTransaction} />
      </fieldset>
    </div>
  );
}

export default App;

