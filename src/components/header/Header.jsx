import { Link } from "react-router-dom";
import { styled } from "styled-components";
import LogoutButton from "./LogoutButton";
import UserInfo from "./UserInfo";
function Header() {
  return (
    <StyledHeader>
      <StyledLeftMenu>
        <Link to="/main">HOME</Link>
        <Link to="/mypage">내 프로필</Link>
      </StyledLeftMenu>
      <StyledRightMenu>
        <UserInfo />
        <LogoutButton />
      </StyledRightMenu>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 20px 0;
  background: #2a2a2a;
`;
const StyledLeftMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 15px;
  a {
    color: white;
  }
`;
const StyledRightMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 15px;
`;
export default Header;
