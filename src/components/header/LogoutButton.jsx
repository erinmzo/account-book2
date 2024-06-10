import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { AuthContext } from "../../context/AuthProvider";
function LogoutButton() {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleLogoutClick = () => {
    logOut();
    navigate("/");
  };
  return (
    <StyledLogoutButton onClick={handleLogoutClick}>
      로그아웃
    </StyledLogoutButton>
  );
}

const StyledLogoutButton = styled.button`
  cursor: pointer;
  background: red;
  border: none;
  color: black;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 30px;
  color: white;
`;

export default LogoutButton;
