import { styled } from "styled-components";
function JoinForm() {
  const validate = () => {
    // if () {
    //   alert("아이디는 4~10자 입니다.");
    //   return false;
    // }
    // if () {
    //   alert("비밀번호는 4~15자 입니다.");
    //   return false;
    // }
    // if () {
    //   alert("닉네임은 1~10자 입니다.");
    //   return false;
    // }
  };

  const handleSubmitJoin = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
  };
  return (
    <StyledJoinForm onSubmit={handleSubmitJoin}>
      <StyledJoinDiv>
        <label htmlFor="join-id">아이디</label>
        <input type="text" id="join-id" placeholder="로그인 아이디" />
      </StyledJoinDiv>
      <StyledJoinDiv>
        <label htmlFor="join-password">비밀번호</label>
        <input type="password" id="join-password" placeholder="비밀번호" />
      </StyledJoinDiv>
      <StyledJoinDiv>
        <label htmlFor="join-nickname">닉네임</label>
        <input type="password" id="join-nickname" placeholder="비밀번호" />
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
