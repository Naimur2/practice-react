import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

export default function Expenses({ items }) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = items.filter(
        (item) => item.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangedHandler} />
            <ExpensesList items={filteredExpenses} />
            <ExpensesChart expenses={filteredExpenses} />
        </Card>
    );
}
