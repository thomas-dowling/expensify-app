import authReducer from '../../reducers/auth';

test('Login should set the uid', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    }

    const state = authReducer({}, action)
    expect(state.uid).toEqual(action.uid);
})

test('Logout should clear the uid', () => {
    const action = {
        type: 'LOGOUT',
    }

    const state = authReducer({ uid: 'anything' }, action);
    expect(state).toEqual({});
})