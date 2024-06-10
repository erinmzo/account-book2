import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useInputChange from "../../hooks/useInputChange";
import { edit } from "../../store/slices/accountSlice";
import { getMonth } from "../../utils";
function EditInputs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { detailId } = useParams();
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
  return (
    <>
      <form onSubmit={handleEditAccount} id="edit-form">
        <div>
          <label htmlFor="dateInput">날짜</label>
          <input
            id="dateInput"
            type="text"
            name="editDate"
            value={editDate}
            onChange={onChangeEditValue}
          />
        </div>
        <div>
          <label htmlFor="dateCategory">항목</label>
          <input
            id="dateCategory"
            type="text"
            name="editCategory"
            value={editCategory}
            onChange={onChangeEditValue}
          />
        </div>
        <div>
          <label htmlFor="dateContent">내용</label>
          <input
            id="dateContent"
            type="text"
            name="editContent"
            value={editContent}
            onChange={onChangeEditValue}
          />
        </div>
        <div>
          <label htmlFor="datePrice">금액</label>
          <input
            id="datePrice"
            type="text"
            name="editPrice"
            value={editPrice}
            onChange={onChangeEditValue}
          />
        </div>
      </form>
    </>
  );
}

export default EditInputs;
