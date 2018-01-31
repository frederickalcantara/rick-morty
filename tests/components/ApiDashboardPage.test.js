import React from 'react';
import { shallow } from 'enzyme';
import { ApiDashboardPage } from '../../src/components/ApiDashboardPage';

test('should render ApiDashboardPage correctly', () => {
	const wrapper = shallow(<ApiDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});