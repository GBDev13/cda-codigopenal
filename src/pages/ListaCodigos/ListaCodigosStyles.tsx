import styled from 'styled-components';

export const Container = styled.main`
  padding: 3rem;

  @media(max-width: 1000px) {
    padding: 1.8rem;
  }
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

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button.adicionar {
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
    margin-left: 1rem;
    padding-right: 1.8rem;

    > svg {
      width: 35px;
      height: 35px;
      margin-right: .5rem;
    }

    transition:.5s;

    &:hover{
      filter: brightness(80%);
    }

    @media(max-width:1150px) {
      padding: .4rem;
      font-size: .8rem;
      padding-right: 1.2rem;
    }
  }

  button.filtros {
    background: var(--failure);
    color: #fff;
    padding: .5rem;
    border: none;
    border-radius: .3rem;
    font-weight:600;
    text-transform: uppercase;
    transition:.5s;
    display:flex;
    align-items: center;
    justify-content:center;
    animation: showRigth 1s;

    > svg {
      width: 25px;
      height: 25px;
      margin-right: .3rem;
    }

    &:hover{
      filter: brightness(80%);
    }

    @keyframes showRigth {
      from {
        transform: translateX(20px);
        opacity:0;
      }
      to {
        transform: translateX(0px);
        opacity:1;
      }
    }
  }

  @media(max-width:970px) {
    align-items: flex-start;
    flex-direction: column;

    > div {
      flex-direction: row-reverse;
      margin-top: 1rem;
    }

    button.adicionar {
      margin-left: 0;
      margin-right: 1rem;
    }
  }
`;

export const CardGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media(max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const NoResults = styled.div`
  background: var(--failure);
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  color: #fff;
`;