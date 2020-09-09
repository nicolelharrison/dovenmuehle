/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { v4 as uuidv4 } from 'uuid';

import H1 from 'components/H1';
import LoadingIndicator from 'components/LoadingIndicator';
import Error from 'components/Error';
import List from './List';
import ListItem from './ListItem';
import {
  makeSelectStrings,
  makeSelectGettingStrings,
  makeSelectGetStringsFailed,
} from '../App/selectors';
import { getStrings } from '../App/actions';

export function FeaturePage(props) {
  useEffect(() => {
    props.getStrings();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>Stored strings</H1>

      {props.loading && <LoadingIndicator />}
      {props.error && <Error message={props.error.message} />}
      {props.strings.map(string => (
        <List key={uuidv4()}>
          <ListItem>
            <p>{string}</p>
          </ListItem>
        </List>
      ))}
    </div>
  );
}

FeaturePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  getStrings: PropTypes.func,
  strings: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectGettingStrings(),
  error: makeSelectGetStringsFailed(),
  strings: makeSelectStrings(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getStrings: () => {
      dispatch(getStrings());
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
)(FeaturePage);
