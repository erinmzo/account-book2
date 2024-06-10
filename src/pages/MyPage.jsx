import { useContext } from "react";
import { redirect } from "react-router-dom";
import Header from "../components/header/Header";
import ProfileForm from "../components/mypage/ProfileForm";
import { AuthContext } from "../context/AuthProvider";

function MyPage() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="context">
        <div className="container mini">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
