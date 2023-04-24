import { useState } from "react";

function BankForm({ addTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description || !amount) return;
    addTransaction({ date, description, amount: +amount, category});
    setDate("");
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Date:</label>
            <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default BankForm;
