import React from "react";

function DeleteTransaction({ transactionId, onDelete }) {
    const handleDelete = () => {
        onDelete(transactionId);
    };

    return (
        <button onClick={handleDelete} className="delete-button">
            Delete transaction
        </button>
    );
}

export default DeleteTransaction;