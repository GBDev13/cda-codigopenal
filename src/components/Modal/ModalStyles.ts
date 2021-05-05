import styled from 'styled-components';
import Modal from 'react-modal';
import { Form as Unform } from '@unform/web'

export const Container = styled(Modal)`
  background: var(--gray-800);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 65vw;
  height:auto;
  border-radius: 1.5rem;
  flex-direction:column;
  animation: goUp .5s;

  @keyframes goUp {
    from {
      transform: scale(0);
      opacity:0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  button {
    display:flex;
    align-items: center;
    justify-content:center;
    background: var(--yellow-500);
    border: none;
    padding: 1rem;
    width: 100%;
    color: var(--yellow-100);
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 700;
    border-radius: .3rem;
    transition:.5s;
    margin-top: 3rem;
    max-width: 30rem;

    &:hover{
      filter: brightness(80%);
    }
  }
`;

export const TopoModal = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
  color: var(--yellow-500);
  text-align: left;
  border-bottom: 1px solid var(--gray-200);
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  svg {
    cursor: pointer;
    transition: .5s;
    &:hover {
      transform: rotate(180deg) scale(1.2);
    }
  }
`;

export const FormContainer = styled(Unform)`
  display:grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: auto;
  grid-gap: 2rem;
  grid-row-gap: 4rem;
  margin-top: 3.5rem;

  .textarea {
    grid-column: 1 / 3;
    width: 100%;
  }
`;

export const ContainerConfirmacao = styled(Modal)`
  background: var(--gray-800);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height:auto;
  border-radius: 1.5rem;
  flex-direction:column;
  animation: goUp .5s;
  overflow: hidden;

  @keyframes goUp {
    from {
      transform: scale(0);
      opacity:0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  section {
    padding: 2rem;
  }

  p {
    font-size: 1.5rem;
    color: #fff;
    font-weight: 500;

    b {
      color: var(--yellow-500);
    }
  }

  div {
    display:grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    button {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 500;
      padding: 1rem;
      border: none;
      background: #565656;
      color: var(--yellow-200);

      &.confirmar{
        background: var(--success);
        color: #fff;
      }
    }
  }

`;