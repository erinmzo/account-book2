import GraphAccount from "../components/main/GraphAccount";
import InputAccount from "../components/main/InputAccount";
import ListAccount from "../components/main/ListAccount";
import TabMonth from "../components/main/TabMonth";

function HomePage() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <InputAccount />
          <TabMonth />
          <GraphAccount />
          <ListAccount />
        </div>
      </div>
    </>
  );
}

export default HomePage;
