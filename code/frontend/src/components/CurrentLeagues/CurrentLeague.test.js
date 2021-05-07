/*
    Written By: Group 3
    Tested By: Group 3
    Debugged By: Group 3
*/

import React from 'react';
import { shallow } from 'enzyme';

import CurrentLeagues from './CurrentLeagues';

describe('<CurrentLeague />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CurrentLeagues />);
    });
    it('should render the Current Leagues container', () => {
        expect(wrapper.find('.current-leagues-container').exists()).toEqual(true);
    });
    it('should render the list of Leagues', () => {
        expect(wrapper.find('.league-list').exists()).toEqual(true);
    });
});