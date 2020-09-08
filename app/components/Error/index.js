import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Error = props => {
  const ErrorPrimitive = styled.div`
    color: #ff0000;
  `;
  return <ErrorPrimitive>An Error occured: {props.message}</ErrorPrimitive>;
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
