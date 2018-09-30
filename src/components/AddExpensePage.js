import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

const AddExpensePage = ({ addExpense, history }) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={expense => {
                addExpense(expense);
                history.push("/");
            }}
        />
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        addExpense: expense => dispatch(startAddExpense(expense))
    };
};
export default connect(
    undefined,
    mapDispatchToProps
)(AddExpensePage);
