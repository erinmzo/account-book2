import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import AuthProvider from "./context/AuthProvider";
import router from "./routes/router";

function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
