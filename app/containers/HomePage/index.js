/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';

import Button from 'components/Button/StyledButton';
import Error from 'components/Error';
import LoadingIndicator from 'components/LoadingIndicator';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import { makeSelectLoading, makeSelectError } from '../App/selectors';
import { postString } from '../App/actions';
import reducer from '../App/reducer';
import saga from '../App/saga';

const key = 'home';

export function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [string, setString] = useState('');

  const onChangeString = event => {
    setString(event.target.value);
  };

  const onSubmitForm = event => {
    if (event !== undefined && event.preventDefault) event.preventDefault();
    props.postString(string);
    setString('');
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>Add your favorite string</H2>
        </CenteredSection>
        <CenteredSection>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="string">
              String:
              <Input
                id="string"
                type="text"
                value={string}
                onChange={onChangeString}
              />
              <br />
              <Button primary disabled={props.loading}>
                Add
              </Button>
            </label>
          </Form>
          {props.loading && <LoadingIndicator />}
          {props.error && <Error message={props.error.message} />}
        </CenteredSection>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  postString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    postString: string => {
      dispatch(postString(string));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
