function EditInputs({ input, onChangeEditValue }) {
  const { editDate, editCategory, editContent, editPrice } = input;
  return (
    <>
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
    </>
  );
}

export default EditInputs;
