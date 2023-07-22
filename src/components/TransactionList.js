import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions }) {
    return (
        <div className="transactions">
            <Transaction transactions={transactions} />
        </div>
    );
}

export default TransactionList;