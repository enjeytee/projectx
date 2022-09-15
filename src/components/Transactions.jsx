import React from "react";
import "../css/transactions.css"
import data from "../data/transactions.json";

const Transactions = () => {
    const [transactions, setTransactions] = React.useState(data);
    // console.log(transactions);
    const fillTable = () => {
        return transactions.map((transaction) => (
            <tr key={transaction.id}>
                <td>{transaction.drNumber}</td>
                <td>{transaction.status}</td>
                <td>{transaction.supplier}</td>
                <td>{transaction.poNumber}</td>
                <td>{transaction.totalSkus}</td>
                <td>{transaction.deliveredQuantity}</td>
                <td>{transaction.acceptedQuantity}</td>
                <td>{transaction.deliveredAmount}</td>
                <td>{transaction.acceptedAmount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.deliveryDate}</td>
                <td>{transaction.eta}</td>
                <td>{transaction.dateCreated}</td>
                {/* <td>{transaction.actions}</td> */}
            </tr>
        ));
    };
    return (
        <div className="transaction-container">
            <table>
                <thead>
                    <tr>
                        <th>D.R. NUMBER</th>
                        <th>STATUS</th>
                        <th>SUPPLIER</th>
                        <th>P.O. NUMBER</th>
                        <th>TOTAL NO. OF SKUS</th>
                        <th>DELIVERED QUANTITY</th>
                        <th>ACCEPTED QUANTITY</th>
                        <th>DELIVERED AMOUNT</th>
                        <th>ACCEPTED AMOUNT</th>
                        <th>TYPE</th>
                        <th>DELIVERY DATE</th>
                        <th>ETA</th>
                        <th>DATE CREATED</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {fillTable()}        
                </tbody>
            </table>
        </div>
    );
};
export default Transactions;