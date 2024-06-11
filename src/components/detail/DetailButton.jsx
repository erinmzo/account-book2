import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAccountData } from "../../api/account";
function DetailButton() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  let { detailId } = useParams();

  const { mutate: deleteAccount } = useMutation({
    mutationFn: (id) => deleteAccountData(id),
    onSuccess: () => queryClient.invalidateQueries(["accountLists"]),
  });

  const handleDeleteAccount = () => {
    alert("삭제됩니다.");
    deleteAccount(detailId);
    navigate("/main");
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
