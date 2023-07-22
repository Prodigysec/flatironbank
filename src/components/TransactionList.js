import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, isFetching }) {
    return (
        <div className="transactions">
            <Transaction transactions={transactions} isFetching={isFetching} />
        </div>
    );
}

export default TransactionList;