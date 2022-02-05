import { useEffect, useState } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  // const [total, setTotal] = useState(0)
 
  useEffect(() => {
    axios
      .get(API_URL + "/transactions")
      .then((res) => {
        setTransactions(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        throw err;
      });

      
  }, []);

  let allTransactions = transactions.map((transaction, index) => {
    return (
      <Transaction transaction={transaction} index={index}/>
      
    );
  });

// let totalAmount = ()=>{
//   let count = 0
//   for(let trans of transactions){
//     count += trans.amount
//   }
//     setTotal(count);
// }
  // let totalAmount = transactions.map((transaction)=>{
  //   return transaction.amount.reduce((a,b)=> Number(a) + Number(b), 0);
  // })
  
  let totalAmount = transactions
    .map((transaction) => transaction.amount)
    .reduce((a, b) => Number(a) + Number(b), 0);


  return (
    <div>
        {totalAmount}
        <table>
          {allTransactions}
        </table>
    </div>
  );
}
export default Transactions;
