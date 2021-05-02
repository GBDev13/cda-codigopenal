import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 3rem;
  background: var(--gray-600);

  svg {
    width: 65px;
  }

  > div {
    display:flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    text-align: right;
    font-size: 1.8rem;
    font-weight: 400;

    span {
      color: var(--yellow-500);
      font-weight: 600;
    }
  }
`;
  