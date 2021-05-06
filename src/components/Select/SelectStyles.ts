import styled, { css } from 'styled-components';

export const customStyles = {
  option: (styles: any, state: { isDisabled: any; }) => ({
    ...styles,
    backgroundColor: state.isDisabled ? '#525252' : '#262623',
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
  }),
}


interface InputProps {
  hasValue: boolean;
  error: boolean;
}

export const SelectContainer = styled.div<InputProps>`
  .react-select__control {
    width: 100%;
    background: var(--gray-500);
    border: none;
    height: 3rem;
    padding: .5rem;
    color: ${(props) => props.hasValue ? 'var(--yellow-500)' : 'var(--gray-100)'};
    border-radius: 0;

    border-bottom: 2px solid;
    border-color: ${(props) => props.hasValue ? 'var(--yellow-500)' : 'var(--gray-100)'};
    transition: .3s;

    ${props => props.error && css`
      color: var(--failure);
      border-color: var(--failure);
    `}

    &:hover {
      border-color: ${(props) => props.hasValue ? 'var(--yellow-500)' : 'var(--gray-100)'};

      ${props => props.error && css`
        border-color: var(--failure);
      `}
    }

    &:focus {
      box-shadow:none
    }
  }

  .react-select__input {
    color: ${(props) => props.hasValue ? 'var(--yellow-500)' : 'var(--gray-100)'};

    ${props => props.error && css`
      color: var(--failure);
    `}
  }

  .react-select__placeholder {
    color: ${(props) => props.hasValue ? 'var(--yellow-500)' : 'var(--gray-100)'};
    font-size: 1.5rem;
    ${props => props.error && css`
      color: var(--failure);
    `}
  }

  .react-select__value-container {
    padding: 0;
    margin-bottom: 8px;
    font-weight: 300;
  }

  .react-select__single-value {
    color: ${(props) => props.hasValue ? 'var(--yellow-500)' : 'var(--gray-100)'};

    ${props => props.error && css`
      color: var(--failure);
    `}
  }

  .react-select__menu {
    background: #353532;
  }

  .react-select__option {
    border-bottom: 1px solid #656565;
    color: #ffecac;
    padding: 1rem;
    background: #262623;
    transition: .5s;
    &:focus {
      background: #353532;
    }
    &:hover {
      background: #353532;
    }
  }

  .react-select__value-container--has-value {
    color: ${(props) => props.hasValue ? 'var(--yellow-500)' : 'var(--gray-100)'};

    ${props => props.error && css`
      color: var(--failure);
    `}
  }

  span {
    display:flex;
    color: var(--failure);
    margin-top: .7rem;
    animation: fadeIn 1s;

    svg {
      margin-right: .5rem;
    }
  }
`;