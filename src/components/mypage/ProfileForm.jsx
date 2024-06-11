import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getUserInfo, updateAvatar } from "../../api/auth";
function ProfileForm() {
  const queryClient = useQueryClient();
  const [imgFile, setImgFile] = useState("");
  const [nickname, setNickname] = useState("");
  const token = localStorage.getItem("accessToken");

  const { data: userInfo } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUserInfo(token),
  });

  useEffect(() => {
    if (userInfo) {
      setNickname(userInfo.nickname);
    }
  }, [userInfo]);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const hanldeChangeFile = (e) => {
    setImgFile(e.target.files[0]);
  };

  const { mutate: updateImg } = useMutation({
    mutationFn: ({ token, imgFile, nickname }) =>
      updateAvatar(token, imgFile, nickname),
    onSuccess: () => queryClient.invalidateQueries(["profile"]),
  });

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    updateImg({ token, imgFile, nickname });
  };
  return (
    <StyledProfileForm>
      <h2>프로필 수정</h2>
      <StyledFormDiv>
        <label>닉네임</label>
        <input type="text" value={nickname} onChange={handleNicknameChange} />
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
