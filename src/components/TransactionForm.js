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
    
}

export default TransactionForm;