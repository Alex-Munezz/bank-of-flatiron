import { useState } from "react";

function BankSearchBar({ transactions, setFilteredTransactions }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredTransactions(transactions);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit">Search a Transaction</button>
      </form>
    </div>
  );
}

export default BankSearchBar;

