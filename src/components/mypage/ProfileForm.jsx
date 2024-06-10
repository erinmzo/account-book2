import { useContext, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { getUserInfo, updateAvatar } from "../../api/Auth";
import { AuthContext } from "../../context/AuthProvider";
function ProfileForm() {
  const { setProfile } = useContext(AuthContext);
  const [userNickName, setUserNickName] = useState("");
  const [imgFile, setImgFile] = useState("");
  const nickNameRef = useRef(null);
  const editNickName = nickNameRef.current?.value;
  const token = localStorage.getItem("accessToken");
  const getUserId = async () => {
    try {
      const data = await getUserInfo(token);
      setUserNickName(data.nickname);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getUserId();
  }, []);
  const hanldeChangeFile = (e) => {
    setImgFile(e.target.files[0]);
  };
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const { message, success } = await updateAvatar(
        token,
        imgFile,
        editNickName
      );
      if (success) {
        const { avatar } = await getUserInfo(token);
        setProfile(avatar);
      }
      alert(message);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <StyledProfileForm>
      <h2>프로필 수정</h2>
      <StyledFormDiv>
        <label>닉네임</label>
        <input type="text" defaultValue={userNickName} ref={nickNameRef} />
      </StyledFormDiv>
      <StyledFormDiv>
        <label>아바타 이미지</label>
        <input type="file" onChange={hanldeChangeFile} />
      </StyledFormDiv>
      <StyledProfileBtn onClick={handleUpdateProfile}>
        프로필 업데이트
      </StyledProfileBtn>
    </StyledProfileForm>
  );
}
const StyledProfileForm = styled.form`
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  h2 {
    font-size: 28px;
    text-align: center;
    font-weight: bold;
  }
`;

const StyledFormDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  label {
    font-size: 14px;
    margin-bottom: 7px;
  }
  input {
    padding: 10px;
  }
`;

const StyledProfileBtn = styled.button`
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
export default ProfileForm;
