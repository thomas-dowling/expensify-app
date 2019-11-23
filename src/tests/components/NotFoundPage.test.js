import { shallow } from 'enzyme';
import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';

test('Should render not found page correctly', () => {
    const wrapper = shallow(<NotFoundPage />)

    expect(wrapper).toMatchSnapshot();
})