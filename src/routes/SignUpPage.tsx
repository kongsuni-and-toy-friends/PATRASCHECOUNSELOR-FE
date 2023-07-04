import { useLocation } from "react-router-dom";
import SignUpForm from "../Components/SignUp/SignUpForm";

const SignUpPage: React.FC = (props) => {
  console.log(props);
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <h1>회원가입</h1>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
