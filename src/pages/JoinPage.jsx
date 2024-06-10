import JoinForm from "../components/join/JoinForm";
import LogInButton from "../components/join/LogInButton";

function JoinPage() {
  return (
    <div className="wrapper">
      <div className="container mini">
        <JoinForm />
        <LogInButton />
      </div>
    </div>
  );
}

export default JoinPage;
