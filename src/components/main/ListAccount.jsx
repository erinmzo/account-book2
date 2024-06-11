import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getMontlyAccountData } from "../../api/account";

function ListAccount() {
  const clickedMonth = useSelector((state) => state.accountList.month);

  const { data: accountLists, isLoading } = useQuery({
    queryKey: ["accountLists", clickedMonth],
    queryFn: () => getMontlyAccountData(clickedMonth),
  });

  return (
    <StyledListBox>
      <StyledListUl>
        {isLoading ? (
          <div> loading... </div>
        ) : (
          accountLists.map((item) => {
            return (
              <StyledListLi key={item.id}>
                <Link to={`/detail/${item.id}`}>
                  <StyedDate>{item.date}</StyedDate>
                  <StyledContents>
                    <StyledTitle>
                      {item.category} - {item.content} / by. {item.createdBy}
                    </StyledTitle>
                    <StyledPrice>{item.price}원</StyledPrice>
                  </StyledContents>
                </Link>
              </StyledListLi>
            );
          })
        )}
      </StyledListUl>
    </StyledListBox>
  );
}
const StyledListBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
`;
const StyledListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 3px solid #eee;
  padding: 10px;
  border-radius: 7px;
`;
const StyledListLi = styled.div`
  a {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 3px;
    background-color: white;
    font-size: 18px;
    &:hover {
      background-color: #dee7ff;
    }
  }
`;
const StyledContents = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledTitle = styled.span`
  max-width: 600px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const StyledPrice = styled.span`
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #0046ff;
  font-weight: 500;
`;
const StyedDate = styled.span`
  font-size: 13px;
  color: #666;
`;
export default ListAccount;
