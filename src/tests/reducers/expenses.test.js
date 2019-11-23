import expensesResucer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { stat } from 'fs';

test('should set default state', () => {
    const state = expensesResucer(undefined, { type: '@@INIT' })

    expect(state).toEqual([]);
})

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesResucer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesResucer(expenses, action);
    expect(state).toEqual(expenses);
})

// should add an expense

test('should add an expense', () => {
    const expense = {
        id: '2019',
        description: 'test123',
        note: '',
        amount: 2000,
        createdAt: 100
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesResucer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
})

//should edit an expense
test('Should edit an expense', () => {
    const amount = 505050;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expensesResucer(expenses, action);
    expect(state[1].amount).toBe(amount);
})

test('Should not edit an expense if ID not found', () => {
    const amount = 505050;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };

    const state = expensesResucer(expenses, action);
    expect(state).toEqual(expenses);
})