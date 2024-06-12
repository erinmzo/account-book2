import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAccountData, getAccountDataById } from "../../api/account";
import { getUserInfo } from "../../api/auth";
function DetailButton() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  let { detailId } = useParams();

  const token = localStorage.getItem("accessToken");

  const { data: userInfo } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUserInfo(token),
  });

  const { data: accountList } = useQuery({
    queryKey: ["accountLists", detailId],
    queryFn: () => getAccountDataById(detailId),
  });

  const { mutate: deleteAccount } = useMutation({
    mutationFn: (id) => deleteAccountData(id),
    onSuccess: () => queryClient.invalidateQueries(["accountLists"]),
  });

  const handleDeleteAccount = () => {
    if (userInfo.id === accountList.userId) {
      alert("삭제됩니다.");
      deleteAccount(detailId);
      navigate("/main");
    } else {
      alert("회원님의 게시물이 아닙니다.");
    }
  };

  const handleBackPage = () => {
    navigate("/main");
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
