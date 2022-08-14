import React from 'react';
import { shallow } from 'enzyme';
import CompareBar from './CompareBar';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Component CompareBar', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <CompareBar />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
