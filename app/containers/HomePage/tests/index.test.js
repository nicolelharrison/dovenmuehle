/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { HomePage, mapDispatchToProps } from '../index';
import { postString } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage loading={false} error={false} repos={[]} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('postString', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.postString).toBeDefined();
      });

      it('should dispatch postString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.postString();
        expect(dispatch).toHaveBeenCalledWith(postString());
      });
    });
  });
});
