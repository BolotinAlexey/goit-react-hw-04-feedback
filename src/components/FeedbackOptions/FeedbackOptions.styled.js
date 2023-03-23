import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  gap: 1em;
`;

export const Button = styled.button`
  padding: 0.5em 1em;
  font-size: 0.9em;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 4px 0px rgba(66, 68, 90, 1);
  background-color: transparent;
  transition: all 0.2s linear;

  :hover {
    background-color: black;
    color: white;
  }
  :active {
    transform: scale(1.1);
  }
`;
