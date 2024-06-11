import { useContext } from "react";
import { redirect } from "react-router-dom";
import Header from "../components/header/Header";
import GraphAccount from "../components/main/GraphAccount";
import InputAccount from "../components/main/InputAccount";
import ListAccount from "../components/main/ListAccount";
import TabMonth from "../components/main/TabMonth";
import { AuthContext } from "../context/AuthProvider";

function HomePage() {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return redirect("/");
  }
  //console.log(isAuthenticated);
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="context">
          <div className="container">
            <InputAccount />
            <TabMonth />
            <GraphAccount />
            <ListAccount />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
