import { useLocation } from "react-router-dom";
import SignUpForm from "../Components/SignUp/SignUpForm";
import AgreeForm from "../Components/Agree/AgreeForm";

const SignUpPage: React.FC = (props) => {
  console.log(props);
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <h1>회원가입</h1>
      <SignUpForm />
      <AgreeForm />
    </>
  );
};

export default SignUpPage;
