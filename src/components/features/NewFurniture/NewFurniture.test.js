import React from 'react';
import { shallow } from 'enzyme';
import NewFurniture from './NewFurniture';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <NewFurniture />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
