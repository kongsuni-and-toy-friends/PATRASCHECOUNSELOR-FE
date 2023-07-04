import { useCallback } from "react";
import { useAuthStore } from "../store";
import { useNavigate } from "react-router-dom";

const SignUpSuccessPage: React.FC = () => {
  const openLoginForm = useAuthStore((state) => state.openLoginForm);
  const navigate = useNavigate();

  const buttonClickHandler = useCallback(() => {
    navigate("/");
    openLoginForm();
  }, [navigate, openLoginForm]);

  return (
    <div>
      <h1>회원가입에 성공했습니다.</h1>
      <div>
        <button onClick={buttonClickHandler}>로그인하러 가기</button>
      </div>
    </div>
  );
};

export default SignUpSuccessPage;
