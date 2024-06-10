import styled from "styled-components";
function Inputs({ onChangeInput, input }) {
  const { date, category, price, content } = input;
  return (
    <>
      <StyledInputList>
        <label htmlFor="inputDate">날짜</label>
        <input
          type="text"
          id="inputDate"
          name="date"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={onChangeInput}
        />
      </StyledInputList>
      <StyledInputList>
        <label htmlFor="inputCategory">항목</label>
        <input
          type="text"
          id="inputCategory"
          name="category"
          placeholder="지출 항목"
          value={category}
          onChange={onChangeInput}
        />
      </StyledInputList>
      <StyledInputList>
        <label htmlFor="inputPrice">금액</label>
        <input
          type="text"
          id="inputPrice"
          placeholder="지출 금액"
          name="price"
          value={price}
          onChange={onChangeInput}
        />
      </StyledInputList>
      <StyledInputList>
        <label htmlFor="inpuContent">내용</label>
        <input
          type="text"
          id="inputContent"
          placeholder="지출 내용"
          name="content"
          value={content}
          onChange={onChangeInput}
        />
      </StyledInputList>
    </>
  );
}
const StyledInputList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  label {
    font-size: 13px;
    color: #666;
    margin-bottom: 7px;
  }
  input {
    padding: 7px 10px;
  }
`;
export default Inputs;
