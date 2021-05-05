import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  padding: 2rem 1.2rem;
  background: var(--gray-600);
  border-radius: .8rem;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.75rem;

    @media(max-width: 1000px) {
      grid-gap: 1rem;
    }
    @media(max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  input {
    background: var(--gray-900);
    padding: 1.3rem 1rem;
    color: var(--yellow-500);
    border:none;
    border-radius: .4rem;
    font-size: 1.5rem;
    border: 1px solid var(--gray-900);

    &::placeholder {
      color: var(--yellow-500);
    }

    &:focus{
      border: 1px solid var(--yellow-500);
    }

    @media(max-width: 900px) {
      font-size: 1.2rem;
      padding: .8rem;
    }
  }

  @media (max-width: 900px) {
    .react-select__control {
      height: 3rem;
      padding: 0;
    }
    .react-select__control,
    .react-select__single-value,
    .react-select__placeholder {
      font-size: 1.2rem;
    }
  }
`;
