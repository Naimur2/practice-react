/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm({ onSaveExpenseData }) {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const inputHandler = (e) => {
        setUserInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userInput.date);
        const newInputs = {
            title: userInput.title,
            amount: +userInput.amount,
            date: new Date(userInput.date),
        };
        onSaveExpenseData(newInputs);
        setUserInput({
            title: '',
            amount: '',
            date: '',
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        onChange={inputHandler}
                        name="title"
                        id="title"
                        type="text"
                        value={userInput.title}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        onChange={inputHandler}
                        value={userInput.amount}
                        name="amount"
                        id="amount"
                        type="number"
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        onChange={inputHandler}
                        value={userInput.date}
                        name="date"
                        id="date"
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
