import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getAccountData } from "../../api/account";

const StGraphbox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
`;
function GraphAccount() {
  const { data: accountLists } = useQuery({
    queryKey: ["accountLists"],
    queryFn: getAccountData,
  });
  const amount = accountLists?.reduce((acc, cur) => acc + cur.price, 0);
  return <StGraphbox>총 사용한 금액은 {amount}원 입니다.</StGraphbox>;
}

export default GraphAccount;
