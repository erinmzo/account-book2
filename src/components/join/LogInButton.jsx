import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
function LogInButton() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };
  return <StyledLoginBtn onClick={handleLoginClick}>로그인</StyledLoginBtn>;
}
const StyledLoginBtn = styled.button`
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
export default LogInButton;
