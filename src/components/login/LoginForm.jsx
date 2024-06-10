import { styled } from "styled-components";
function LoginForm() {
  return (
    <StyledLoginForm>
      <StyledLoginDiv>
        <label htmlFor="login-id">로그인 아이디</label>
        <input type="text" id="login-id" placeholder="로그인 아이디" />
      </StyledLoginDiv>
      <StyledLoginDiv>
        <label htmlFor="login-password">비밀번호</label>
        <input type="password" id="login-password" placeholder="비밀번호" />
      </StyledLoginDiv>
      <StyledLoginBtn>로그인</StyledLoginBtn>
    </StyledLoginForm>
  );
}
const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  border-radius: 15px;
  padding: 30px;
`;
const StyledLoginDiv = styled.div`
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
export default LoginForm;
