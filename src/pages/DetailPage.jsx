import { useContext } from "react";
import { redirect } from "react-router-dom";
import styled from "styled-components";
import DetailButton from "../components/detail/DetailButton";
import EditInputs from "../components/detail/EditInputs";
import Header from "../components/header/Header";
import { AuthContext } from "../context/AuthProvider";

function DetailPage() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="context">
          <div className="container">
            <Box>
              <EditInputs />
            </Box>
            <BtnBox>
              <DetailButton />
            </BtnBox>
          </div>
        </div>
      </div>
    </>
  );
}

const Box = styled.div`
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      font-size: 13px;
      color: #666;
      margin-top: 10px;
    }
    input {
      padding: 7px 10px;
      font-size: 18px;
    }
  }
`;
const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  button {
    padding: 9px 10px;
    border: none;
    border-radius: 5px;
    color: white;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  & > button:nth-child(1) {
    background-color: #074abb;
  }
  & > button:nth-child(2) {
    background-color: #d45050;
  }
  & > button:nth-child(3) {
    background-color: #666;
  }
`;
export default DetailPage;
