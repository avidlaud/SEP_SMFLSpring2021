/*
    Written By: Group 3
    Tested By: Group 3
    Debugged By: Group 3
*/

import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });
    it('should render application header', () => {
        expect(wrapper.find('.application-header').exists()).toEqual(true);
    });
});