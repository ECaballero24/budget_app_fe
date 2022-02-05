import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        navigate("not found");
      });
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
      .then((res) => {
        navigate("/transactions");
      })
      .catch(() => {
        navigate("not-found");
      });
  };

  return(
    <div>

      <div>
      <h2>{transaction.date}</h2>
      <h2>{transaction.name}</h2>
      <h2>{transaction.amount}</h2>
      <h2>{transaction.from}</h2>
      <h2>{transaction.category}</h2>
     </div>
     
     <div>
      <Link to={`/transactions`}>
         <button>BACK</button>
      </Link>
     </div> 
     <div>
       <Link to={`/transactions/${index}/edit`}>
         <button>EDIT</button>
       </Link>
       
     </div>
    </div>
  )
}

export default TransactionDetails;
