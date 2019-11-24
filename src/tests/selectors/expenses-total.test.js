import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const noExpenses = [];
    const result = expensesTotal(noExpenses);
    expect(result).toEqual(0);
})

test('should correctly add up a single expenses', () => {
    const result = expensesTotal([expenses[1]]);
    expect(result).toEqual(250);
})

test('should correctly add up multiple expenses', () => {
    const result = expensesTotal(expenses);
    expect(result).toEqual(595);
})