import React from 'react';
import ExpenseItem from './Expenseitem';
import './ExpensesList.css';

export default function ExpensesList({ items }) {
    if (items.length === 0) return <h2 className="expense-list__fallback">No Expense Found </h2>;
    return items.map((item) => (
        <ul key={item.id} className="expenses-list">
            <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
        </ul>
    ));
}
