import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { joinFetch } from "../../api/auth";
import useInputChange from "../../hooks/useInputChange";
function JoinForm() {
  const navigate = useNavigate();
  const { values: input, handler: onChangeInput } = useInputChange({
    id: "",
    password: "",
    nickname: "",
  });

  const { id, password, nickname } = input;

  const handleSubmitJoin = async (e) => {
    e.preventDefault();
    try {
      const joinData = await joinFetch(id, password, nickname);
      alert(joinData.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <StyledJoinForm onSubmit={handleSubmitJoin}>
      <StyledJoinDiv>
        <label htmlFor="join-id">아이디</label>
        <input
          type="text"
          id="join-id"
          name="id"
          placeholder="로그인 아이디"
          onChange={onChangeInput}
        />
      </StyledJoinDiv>
      <StyledJoinDiv>
        <label htmlFor="join-password">비밀번호</label>
        <input
          type="password"
          id="join-password"
          name="password"
          placeholder="비밀번호"
          onChange={onChangeInput}
        />
      </StyledJoinDiv>
      <StyledJoinDiv>
        <label htmlFor="join-nickname">닉네임</label>
        <input
          type="text"
          id="join-nickname"
          name="nickname"
          placeholder="닉네임"
          onChange={onChangeInput}
        />
      </StyledJoinDiv>
      <StyledLoginBtn>가입하기</StyledLoginBtn>
    </StyledJoinForm>
  );
}
const StyledJoinForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  border-radius: 15px;
  padding: 30px;
`;
const StyledJoinDiv = styled.div`
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
const StyledLoginBtn = styled.button`
  cursor: pointer;
  background-color: #0046ff;
  color: white;
  text-align: center;
  border: none;
  padding: 15px 0;
  border-radius: 7px;
`;

export default JoinForm;
