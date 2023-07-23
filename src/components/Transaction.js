import React from "react";
import DeleteTransaction from "./DeleteTransaction";

function Transaction({ transactions, isFetching, onDeleteTransaction  }) {
    return (
        <>
            {isFetching ? (<p className="transaction-loading">Loading transactions...</p>) :
                transactions.length === 0 ? (<p className="transaction-none">No transactions found.</p>) :
                    (transactions.map((transaction, index) => {
                        return (
                            <div className="transaction" key={index}>
                                <p>Date: {transaction.date}</p>
                                <p>Description: {transaction.description}</p>
                                <p>Category: {transaction.category}</p>
                                <p>Amount: {transaction.amount}</p>
                                <DeleteTransaction
                                    transactionId={transaction.id}
                                    onDelete={onDeleteTransaction}
                                />
                            </div>
                        )
                    }))
            }
        </>

    )
}

export default Transaction;