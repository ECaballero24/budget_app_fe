import { useEffect, useState } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${APP_API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
}
