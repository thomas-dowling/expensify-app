import { shallow } from 'enzyme';
import React from 'react';
import { LoginPage } from '../../components/LoginPage';

test('Should render not found page correctly', () => {
    const wrapper = shallow(<LoginPage />)

    expect(wrapper).toMatchSnapshot();
})

test('Should call startLogIn on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>)
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})