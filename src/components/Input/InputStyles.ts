import styled, { css } from 'styled-components';

interface InputProps {
  hasValue: boolean;
  error: boolean;
}

export const InputContainer = styled.div<InputProps>`
  position: relative;

  & + div {
    margin-top: 2.5rem;
  }

  label {
    color: ${(props) => props.hasValue ? 'var(--yellow-500)' : 'var(--gray-100)'};
    font-weight: 300;
    font-size: ${(props) => props.hasValue ? '1rem' : '1.5rem'};
    position: absolute;
    top: ${(props) => props.hasValue ? '-1.5rem' : '.5rem'};
    left: ${(props) => props.hasValue ? '0' : '.5rem'};
    transition: .3s;
    pointer-events: none;

    ${props => props.error && css`
      color: var(--failure);
    `}
  }

  input {
    width: 100%;
    background: var(--gray-500);
    border: none;
    height: 3rem;
    padding: .5rem;
    color: ${(props) => props.hasValue ? 'var(--yellow-500)' : 'var(--gray-100)'};

    border-bottom: 2px solid;
    border-color: ${(props) => props.hasValue ? 'var(--yellow-500)' : 'var(--gray-100)'};
    transition: .3s;

    ${props => props.error && css`
      color: var(--failure);
      border-color: var(--failure);
    `}

  }

  span {
    display:flex;
    color: var(--failure);
    margin-top: .7rem;
    animation: fadeIn 1s;

    svg {
      margin-right: 1rem;
    }
  }

`;