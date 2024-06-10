import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MONTH } from "../../constants";
import { monthSet } from "../../store/slices/accountSlice";

function TabMonth() {
  const clickedMonth = useSelector((state) => state.accountList.month);
  const dispatch = useDispatch();
  const handleMonthTab = (month) => {
    dispatch(monthSet(month));
    localStorage.setItem("month", month);
  };

  return (
    <StyledTabWrap>
      <StyledTabBox>
        {MONTH.map((month) => {
          const activeMonth = month === clickedMonth;
          return (
            <StyledTabList
              key={month}
              $active={activeMonth}
              onClick={() => {
                handleMonthTab(month);
              }}
            >
              {month}월
            </StyledTabList>
          );
        })}
      </StyledTabBox>
    </StyledTabWrap>
  );
}
const StyledTabWrap = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
`;
const StyledTabBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const StyledTabList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$active ? "#0046ff" : "#eee")};
  padding: 30px 0;
  border-radius: 7px;
  color: ${(props) => (props.$active ? "white" : "black")};
  cursor: pointer;
  &:hover {
    background-color: #0046ff;
    color: white;
  }
`;
export default TabMonth;
