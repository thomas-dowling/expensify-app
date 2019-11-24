export default (expenses) => {
    return expenses
        .map(expenses => expenses.amount)
        .reduce((acc, expenses) => acc + expenses, 0);
}