import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { getUserInfo } from "../../api/Auth";
import { AuthContext } from "../../context/AuthProvider";
function UserInfo() {
  const [userInfo, setUserInfo] = useState("");
  const { imgUrl, setProfile } = useContext(AuthContext);
  const token = localStorage.getItem("accessToken");
  const getUserId = async () => {
    try {
      const data = await getUserInfo(token);
      setUserInfo(data);
      if (!data.avatar) {
        setProfile("/default-user-profile.png");
      } else {
        setProfile(data.avatar);
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
        <img src={imgUrl} alt={userInfo.nickname} />
      </div>
      <div>
        <span>{userInfo.nickname}</span>님 환영합니다.
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
