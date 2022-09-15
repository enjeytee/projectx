import React from "react";

const Table = ( { transactions }) => {
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
    ))
    ;
};
export default Table