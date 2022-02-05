import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransactionEditForm() {
  let { index } = useParams();

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((err) => {
        navigate("/not-found");
      });
  }, [index]);

const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/transactions/${index}`, transaction)
    .then((res)=>{
      navigate(`/transactions`);
    }).catch((err)=>{
      console.log(err);
    })
  };


return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input className="form-control"
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <label htmlFor="name">Name</label>
        <input className="form-control"
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          required
        />
        <label htmlFor="amount">Amount</label>
        <input className="form-control"
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="amount"
          required
        />
        <label htmlFor="from">From</label>
        <input className="form-control"
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="from"
          required
        />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
      <button variant="outline-primary">Back</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;
