import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAccountData, updateAccountData } from "../../api/account";
import useInputChange from "../../hooks/useInputChange";
import { getMonth } from "../../utils";
function EditInputs() {
  const navigate = useNavigate();
  const { detailId } = useParams();
  const queryClient = useQueryClient();

  const { data: accountLists } = useQuery({
    queryKey: ["accountLists"],
    queryFn: getAccountData,
  });

  const list = accountLists?.find((item) => {
    return item.id === detailId;
  });

  const {
    values: input,
    handler: onChangeEditValue,
    setValues,
  } = useInputChange({
    editDate: "",
    editCategory: "",
    editContent: "",
    editPrice: "",
  });

  useEffect(() => {
    if (list) {
      setValues({
        editDate: list.date,
        editCategory: list.category,
        editContent: list.content,
        editPrice: list.price,
      });
    }
  }, [list, setValues]);

  const { editDate, editCategory, editContent, editPrice } = input;

  const { mutate: updateList } = useMutation({
    mutationFn: ({ id, list }) => updateAccountData(id, list),
    onSuccess: () => queryClient.invalidateQueries(["accountLists"]),
  });

  const handleEditAccount = () => {
    const editList = {
      date: editDate,
      category: editCategory,
      price: Number(editPrice),
      content: editContent,
      month: getMonth(editDate),
    };

    updateList({ id: detailId, list: editList });
    navigate("/main");
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
