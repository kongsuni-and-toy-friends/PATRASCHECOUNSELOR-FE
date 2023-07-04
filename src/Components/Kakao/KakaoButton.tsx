import { useCallback } from "react";

const { Kakao } = window;

const KakaoButton: React.FC = () => {
  const kakaoLogin = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      Kakao.Auth.authorize({ redirectUri: "http://localhost:5173/kakao" });
    },
    []
  );

  const buttonClass =
    "flex mx-auto bg-[#FEE500] rounded-[12px] items-center w-[222px] h-[45px]";

  return (
    <button className={buttonClass} onClick={kakaoLogin}>
      <img
        className="w-[30px] h-[30px] mx-[12px]"
        src="/kakao.svg"
        alt="카카오 로그인"
      />
      <span className="text-black/85 grow">카카오 로그인</span>
    </button>
  );
};

export default KakaoButton;
