import { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { getUserInfo } from "../../api/auth";
import { AuthContext } from "../../context/AuthProvider";
function UserInfo() {
  const { imgUrl, setProfileImg, nickName, setProfileNickName } =
    useContext(AuthContext);
  const token = localStorage.getItem("accessToken");
  const getUserId = async () => {
    try {
      const data = await getUserInfo(token);
      setProfileNickName(data.nickname);
      if (!data.avatar) {
        setProfileImg("/default-user-profile.png");
      } else {
        setProfileImg(data.avatar);
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getUserId();
  }, []);
  return (
    <StyledUserInfo>
      <div>
        <img src={imgUrl} alt={nickName} />
      </div>
      <div>
        <span>{nickName}</span>님 환영합니다.
      </div>
    </StyledUserInfo>
  );
}
const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    color: white;
    img {
      width: 34px;
      height: 34px;
      border-radius: 15px;
    }
    span {
      font-weight: bold;
    }
  }
`;

export default UserInfo;
