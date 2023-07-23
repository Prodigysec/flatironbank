import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, isFetching, onDeleteTransaction  }) {
    return (
        <div className="transactions">
            <Transaction transactions={transactions} isFetching={isFetching} onDeleteTransaction={onDeleteTransaction}/>
        </div>
    );
}

export default TransactionList;