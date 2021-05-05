import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      transition:.3s;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--yellow-500);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
      background: var(--yellow-200);
    }
    ::-webkit-scrollbar-track{
      background: var(--gray-200);
      border-radius: 10px;
    }
  }

  :root {
    --gray-100: #656565;
    --gray-200: #6b6b6b;
    --gray-500: #262623;
    --gray-600: #2a2a2a;
    --gray-700: #222222;
    --gray-800: #2F2F2F;
    --gray-900: #1D1D1B;
    
    --yellow-100: #ffecac;
    --yellow-200: #feda99;
    --yellow-500: #f9b036;

    --success: #79cd7d;
    --failure: #c54c4c;
  }

  @media (max-width:1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width:720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    color:  var(--yellow-200);
  }

  body, input, textarea, button, select {
    font: 400 1rem "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  @keyframes fadeIn {
    from {
      transform: translateX(-10px);
      opacity:0;
    }
    to{
      transform: translateX(0px);
      opacity:1;
    }
  }
`;
 
export default GlobalStyle;