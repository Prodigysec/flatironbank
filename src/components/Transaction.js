import React from "react";

function Transaction({ transactions }) {
    return (
        transactions.map((transaction, index) => {
            return (
                <div className="transaction" key={index}>
                    <p>Date: {transaction.date}</p>
                    <p>Description: {transaction.description}</p>
                    <p>Category: {transaction.category}</p>
                    <p>Amount: {transaction.amount}</p>
                </div>)
        })

    )
}

export default Transaction;