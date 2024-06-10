import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { loginFetch } from "../../api/Auth";
import { AuthContext } from "../../context/AuthProvider";
import useInputChange from "../../hooks/useInputChange";
function LoginForm() {
  const navigate = useNavigate();
  const { logIn } = useContext(AuthContext);
  const { values: input, handler: onChangeInput } = useInputChange({
    id: "",
    password: "",
  });
  const { id, password } = input;

  const handlLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginFetch(id, password);
      if (data.success) {
        logIn(data.accessToken);
        navigate("/main");
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      alert(`${error}`);
    }
  };

  return (
    <StyledLoginForm onSubmit={handlLoginSubmit}>
      <StyledLoginDiv>
        <label htmlFor="login-id">로그인 아이디</label>
        <input
          type="text"
          id="login-id"
          placeholder="로그인 아이디"
          name="id"
          onChange={onChangeInput}
        />
      </StyledLoginDiv>
      <StyledLoginDiv>
        <label htmlFor="login-password">비밀번호</label>
        <input
          type="password"
          id="login-password"
          name="password"
          onChange={onChangeInput}
          placeholder="비밀번호"
        />
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
