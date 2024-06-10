import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { remove } from "../../store/slices/accountSlice";
function DetailButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { detailId } = useParams();
  const accountLists = useSelector((state) => state.accountList.list);
  const { id } = accountLists.find((item) => {
    return item.id === detailId;
  });

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
      <button type="submit" form="edit-form">
        수정
      </button>
      <button onClick={handleDeleteAccount}>삭제</button>
      <button onClick={handleBackPage}>뒤로가기</button>
    </>
  );
}

export default DetailButton;
