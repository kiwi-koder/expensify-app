import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>Amount: {amount} - {createdAt}</p>
    </div>
);


export default ExpenseListItem