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

    function handleSubmit(event) {
        event.preventDefault();

        const lastTransactionId = transactionList.length > 0 ? transactionList[transactionList.length - 1].id : 0;
        const newId = lastTransactionId + 1;
        const formDataWithId = { ...formData, id: newId };

        const isAnyFieldEmpty = formData.date.trim() === "" || formData.description.trim() === "" || formData.category.trim() === "" || formData.amount.trim() === "";
        isAnyFieldEmpty ? alert("Please fill in all the fields") : onFormInputChange(formDataWithId)

        setFormData({
            id: "",
            date: "",
            description: "",
            category: "",
            amount: ""
        });
    }

    return (
        <form onSubmit={handleSubmit} className="TransactionForm">
            <label for="date">Date:</label>
            <input
                type="text"
                name="date"
                placeholder="2022-07-09"
                value={formData.date}
                onChange={handleFormChange}
            />
            <label for="description">Description:</label>
            <input
                type="text"
                name="description"
                placeholder="lawyer fee"
                value={formData.description}
                onChange={handleFormChange}
            />
            <label for="category">Category:</label>
            <input
                type="text"
                name="category"
                placeholder="expenses"
                value={formData.category}
                onChange={handleFormChange}
            />
            <label for="amount">Amount:</label>
            <input
                type="text"
                name="amount"
                placeholder="31337"
                value={formData.amount}
                onChange={handleFormChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TransactionForm;