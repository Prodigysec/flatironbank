import React, { useState, useEffect } from "react";

function TransactionForm({ transactions, onFormInputChange }) {
    const [formData, setFormData] = useState({
        id: "",
        date: "",
        description: "",
        category: "",
        amount: ""
    })

    const [transactionList, setTransactionList] = useState([]);

    useEffect(() => {
        setTransactionList(transactions);
    }, []);

    function handleFormChange(event) {
        const { name, value } = event.target;

        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleFormChange}
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
            />
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleFormChange}
            />
            <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleFormChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TransactionForm;