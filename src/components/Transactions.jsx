import React from "react";
import "../css/transactions.css"
import data from "../data/transactions.json";

const Transactions = () => {
    const [transactions, setTransactions] = React.useState(data);
    // console.log(transactions);
    const fillTable = () => {
        return transactions.map((transaction) => (
            <tr key={transaction.id}>
                <td data-label="DR NUMBER">{transaction.drNumber}</td>
                <td data-label="STATUS">{transaction.status}</td>
                <td data-label="SUPPLIER">{transaction.supplier}</td>
                <td data-label="PO NUMBER">{transaction.poNumber}</td>
                <td data-label="TOTAL SKUS">{transaction.totalSkus}</td>
                <td data-label="DELIVERED QUANTITY">{transaction.deliveredQuantity}</td>
                <td data-label="ACCEPTED QUANTITY">{transaction.acceptedQuantity}</td>
                <td data-label="DELIVERED AMOUNT">{transaction.deliveredAmount}</td>
                <td data-label="ACCEPTED AMOUNT">{transaction.acceptedAmount}</td>
                <td data-label="TYPE">{transaction.type}</td>
                <td data-label="DELIVERY DATA">{transaction.deliveryDate}</td>
                <td data-label="ETA">{transaction.eta}</td>
                <td data-label="DATE CREATED">{transaction.dateCreated}</td>
        </tr>
        ));
    };
    return (
        <div className="transactions-container">
            <table className="transactions-table">
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