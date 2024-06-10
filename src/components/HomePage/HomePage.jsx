import GraphAccount from "../GraphAccount";
import InputAccount from "../InputAccount";
import ListAccount from "../ListAccount";
import TabMonth from "../TabMonth";

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
