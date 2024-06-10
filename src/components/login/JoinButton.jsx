import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
function JoinButton() {
  const navigate = useNavigate();
  const handJoinClick = () => {
    navigate("/join");
  };
  return <StyledJoinBtn onClick={handJoinClick}>회원가입</StyledJoinBtn>;
}

const StyledJoinBtn = styled.button`
  cursor: pointer;
  background-color: #323746;
  color: white;
  text-align: center;
  border: none;
  padding: 15px 0;
  border-radius: 7px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export default JoinButton;
