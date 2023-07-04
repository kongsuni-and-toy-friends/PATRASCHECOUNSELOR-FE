import { Link } from "react-router-dom";
import KakaoButton from "../Components/Kakao/KakaoButton";

const SignUpOptionsPage: React.FC = () => {
  return (
    <>
      <Link
        to="./email"
        className="block border-2 border-black px-10 py-4 w-[200px] h-15 mx-auto my-4"
      >
        이메일로 회원가입
      </Link>
      <KakaoButton />
    </>
  );
};

export default SignUpOptionsPage;
