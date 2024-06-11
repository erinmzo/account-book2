import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";
import { getUserInfo } from "../../api/auth";
function UserInfo() {
  const token = localStorage.getItem("accessToken");
  const { data: userInfo, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUserInfo(token),
  });

  return isLoading ? (
    <div>loading....</div>
  ) : (
    <StyledUserInfo>
      <div>
        <img src={userInfo.avatar} alt={userInfo.nickname} />
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
