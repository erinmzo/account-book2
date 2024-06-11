import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addAccountData } from "../../api/account";
import { getUserInfo } from "../../api/auth";
import useInputChange from "../../hooks/useInputChange";
import { monthSet } from "../../store/slices/accountSlice";
import { getMonth } from "../../utils";
import Inputs from "./Inputs";
function InputAccount() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const {
    values: input,
    handler: onChangeInput,
    reset: onReset,
  } = useInputChange({
    date: "",
    category: "",
    content: "",
    price: "",
  });
  const { date, category, content, price } = input;

  const token = localStorage.getItem("accessToken");

  const getUserId = async () => {
    try {
      const data = await getUserInfo(token);
      return data.nickname;
    } catch (error) {
      alert(error);
    }
  };

  const validate = () => {
    if (!date.trim() || !category.trim() || !content.trim() || !price.trim()) {
      alert("모든 항목을 입력해주세요.");
      return false;
    }

    const dateReg = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!dateReg.test(date)) {
      alert("YYYY-MM-DD 형식을 맞춰주세요.");
      return false;
    }

    const numbReg = /^[1-9][0-9]*$/;
    if (!numbReg.test(price)) {
      alert("0으로 시작하지 않는 숫자만 넣어주세요");
      return false;
    }
    return true;
  };

  const { mutate: addAccount } = useMutation({
    mutationFn: (newList) => addAccountData(newList),
    onSuccess: queryClient.invalidateQueries(["accountLists"]),
  });

  const submitAccount = async (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    const userNickName = await getUserId();

    const newList = {
      date,
      category,
      price: Number(price),
      content,
      month: getMonth(date),
      createdBy: userNickName,
    };
    addAccount(newList);
    dispatch(monthSet(newList.month));
    onReset();
  };

  return (
    <StyledInputBox onSubmit={submitAccount}>
      <Inputs onChangeInput={onChangeInput} input={input} />
      <StyledButtonBox>
        <StyledButton>저장</StyledButton>
      </StyledButtonBox>
    </StyledInputBox>
  );
}
const StyledInputBox = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  gap: 15px;
`;
const StyledButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const StyledButton = styled.button`
  padding: 9px 10px;
  background-color: #0046ff;
  border: none;
  border-radius: 5px;
  color: white;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export default InputAccount;
