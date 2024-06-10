import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  .wrapper{
    background-color: #434a5e;
    padding: 30px;
    height: 100%;
    min-height: 100vh;
    padding: 60px;
  }
  .container{
    background-color: #dee7ff;
    width: 800px;
    margin: 0 auto;
    border-radius: 30px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
export default GlobalStyle;
