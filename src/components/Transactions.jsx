import React from "react";
import "../css/transactions.css"
import data from "../data/transactions.json";
import Table from "./Table.jsx";

const Transactions = () => {
    const [transactions, setTransactions] = React.useState(data);
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
                    <Table 
                        transactions={transactions}
                    />
                </tbody>
            </table>
        </div>
    );
};
export default Transactions;