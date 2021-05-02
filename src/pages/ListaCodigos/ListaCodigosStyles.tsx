import styled from 'styled-components';

export const Container = styled.main`
  padding: 3rem;
`;

export const Topo = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  h2 {
    color: var(--yellow-500);
    font-weight: 400;
    font-size: 1.8rem;
  }

  button {
    display:flex;
    align-items: center;
    justify-content:center;
    padding: .5rem 1rem;
    background: var(--yellow-500);
    border:none;
    border-radius: .3rem;
    font-weight:600;
    text-transform: uppercase;
    font-size: 1.25rem;
    color: var(--yellow-100);

    > svg {
      width: 35px;
      height: 35px;
      margin-right: .5rem;
    }

    transition:.5s;

    &:hover{
      filter: brightness(80%);
    }
  }
`;
  