import styled from 'styled-components';

export const CardContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--gray-700);
  border-radius: 1rem;
  height: 100%;
  animation: showCard .6s both;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
    p.date {
      color: var(--gray-100);
      transition: .5s;

      &:hover {
        color: var(--yellow-500);
      }
    }
  }

  @keyframes showCard {
    from {
      opacity: 0;
      transform: scale(.6) translateY(100px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
  }

  > div:first-child {
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
  }

  > div:last-child {
    padding: 1rem;
  }

  strong {
    color: var(--yellow-500);
    font-size: 1.5rem;
    display:flex;
    align-items: center;

    @media(max-width: 1200px) {
      font-size: 1.2rem;
    }

    span {
      margin-left: .8rem;
      color: #fff;
      font-weight: 500;
      text-transform: uppercase;
      font-size: .8rem;
      padding: .2rem .5rem;
      border-radius: .2rem;

      &.Ativo {
        background: var(--success);
      }
      &.Inativo {
        background: var(--failure);
      }
    }
  }

  div > p {
    font-weight: 400;
    font-size: 1rem;
    color: var(--yellow-200);
    margin-bottom: 1.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.25rem;

      @media(max-width: 1200px) {
        font-size: 1rem;
      }

      b {
        color: var(--yellow-500);
      }
    }

    @media(max-width: 900px) {
      flex-direction: column;

      li + li {
        margin-top: .5rem;
      }
    }

    @media(max-width: 750px) {
      flex-direction: row;
    }
  }

  .footer {
    width: 100%;
    background: var(--gray-600);
    border-radius: 0 0 1rem 1rem;

    > div {
      max-width: 70%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media(max-width: 1000px) {
        max-width: 85%;
      }

      @media(max-width: 750px) {
        max-width: 70%;
      }

      .separador {
        background: var(--yellow-200);
        width: 2px;
        height: 30px;
      }

      button {
        background: none;
        border: none;
        color: var(--yellow-100);
        display:flex;
        align-items: center;
        font-size: 1.3rem;

        svg {
          margin-right: .5rem;
        }

        &, svg path {
          transition: .5s;
        }

        @media(max-width: 800px) {
          font-size: 1rem;

          svg {
            width: 25px;
            height: 25px;
          }
        }

        @media(max-width: 750px) {
          font-size: 1.3rem;
          svg {
            width: 35px;
            height: 35px;
          }
        }

        &:hover {
          color: var(--yellow-500);

          svg path{
            fill: var(--yellow-500);
          }
        }
        
      }
    }
  }
`;