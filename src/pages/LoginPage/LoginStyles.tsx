import styled from 'styled-components';
import loginImage from '../../assets/loginbg.jpg'
import { Form as Unform } from '@unform/web'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display:grid;
  grid-template-columns: 1.5fr 1fr;

  @media(max-width:900px) {
    grid-template-columns: 2fr 1fr;
  }

  @media(max-width:700px) {
    grid-template-columns: 1fr;
  }

  form > div + div {
    margin-top: 2.5rem;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    > svg {
      width: 98px;
      margin-bottom: 3.25rem;
    }

    h1 {
      color: var(--yellow-500);
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: var(--yellow-100);
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.8rem;
      margin-bottom: 7rem;
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
      margin-top: 2.5rem;
      text-transform: uppercase;
      font-size: 1.8rem;
      font-weight: 700;
      border-radius: .3rem;
      transition:.5s;

      &:hover{
        filter: brightness(80%);
      }
    }
  }

  .image {
    width: 100%;
    height: 100%;
    background: url('${loginImage}') no-repeat center;
    background-size: cover;
    position: relative;

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(249,176,54,1) 0%, rgba(249,176,54,0) 100%);
    }
  }
`;

export const Form = styled(Unform)`
  width: 100%;
  max-width: 24rem;

`;