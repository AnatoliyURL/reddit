import React from "react";
import {Dropdown} from "../Dropdown";
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = shallow(<Dropdown button={<div />} children={<button />} />)
        expect(wrapper).toBeDefined()
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy()
    })

    test('should render (snapshot)', () => {
        const wrapper = shallow(<Dropdown button={<div />} children={<button />} />)

        expect(wrapper).toMatchSnapshot()
    })
})