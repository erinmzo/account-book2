import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
.wrapper{
  
}
  .context{
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #434a5e;
    padding: 30px;
    height: 100vh;
    min-height: 100vh;
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
  .container.mini{
    width: 400px;
  }
`;

export default GlobalStyle;
