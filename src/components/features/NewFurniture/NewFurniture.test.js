import React from 'react';
import { shallow } from 'enzyme';
import NewFurniture from './NewFurniture';
import store from '../../../redux/store';
describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewFurniture store={store} />);
    expect(component).toBeTruthy();
  });
});
