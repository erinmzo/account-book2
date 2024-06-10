import JoinButton from "../components/login/JoinButton";
import LoginForm from "../components/login/LoginForm";

function LogInPage() {
  return (
    <div className="context">
      <div className="container mini">
        <LoginForm />
        <JoinButton />
      </div>
    </div>
  );
}

export default LogInPage;
