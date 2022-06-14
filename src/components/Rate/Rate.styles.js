import styled from "styled-components";

export const Button = styled.button`
  color: var(--darkGrey);
  font-weight: 700;
  font-size: .9rem;
  background-color: var(--white);
  outline: none;
  border: none;
  padding: .7em 0;
  width: 100px;
  border-radius: 10px;

  :hover {
    opacity: .9;
    transition: ease-in .2s;
  }
`;
