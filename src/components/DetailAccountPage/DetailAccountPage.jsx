import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useInputChange from "../../hooks/useInputChange";
import { edit, remove } from "../../store/slices/accountSlice";
import { getMonth } from "../../utils";
import EditInputs from "../EditInputs";

function DetailAccountPage() {
  let { detailId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accountLists = useSelector((state) => state.accountList.list);
  const { date, category, content, price, id } = accountLists.find((item) => {
    return item.id === detailId;
  });

  const { values: input, handler: onChangeEditValue } = useInputChange({
    editDate: date,
    editCategory: category,
    editContent: content,
    editPrice: price,
  });

  const { editDate, editCategory, editContent, editPrice } = input;

  const handleEditAccount = () => {
    const editList = {
      id: id,
      date: editDate,
      category: editCategory,
      price: Number(editPrice),
      content: editContent,
      month: getMonth(editDate),
    };
    dispatch(edit(editList));
    navigate("/");
  };

  const handleDeleteAccount = () => {
    alert("삭제됩니다.");
    dispatch(remove(id));
    navigate("/");
  };

  const handleBackPage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Box>
            <EditInputs input={input} onChangeEditValue={onChangeEditValue} />
          </Box>
          <BtnBox>
            <button type="submit" onClick={handleEditAccount}>
              수정
            </button>
            <button onClick={handleDeleteAccount}>삭제</button>
            <button onClick={handleBackPage}>뒤로가기</button>
          </BtnBox>
        </div>
      </div>
    </>
  );
}

const Box = styled.div`
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      font-size: 13px;
      color: #666;
      margin-top: 10px;
    }
    input {
      padding: 7px 10px;
      font-size: 18px;
    }
  }
`;
const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  button {
    padding: 9px 10px;
    border: none;
    border-radius: 5px;
    color: white;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  & > button:nth-child(1) {
    background-color: #074abb;
  }
  & > button:nth-child(2) {
    background-color: #d45050;
  }
  & > button:nth-child(3) {
    background-color: #666;
  }
`;
export default DetailAccountPage;
