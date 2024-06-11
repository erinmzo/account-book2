import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
.wrapper{
  
}
  .context{
    background-color: #434a5e;
    padding: 60px 0 100px;
    min-height: 100vh;
    height: 100%;
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
