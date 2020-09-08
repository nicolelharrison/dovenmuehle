import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: ${props => (props.primary ? '#fff' : '#41addd')};
  background-color: ${props => (props.primary ? '#41addd' : '#fff')};
  margin-top: ${props => (props.primary ? '2em' : '0em')};

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default buttonStyles;
