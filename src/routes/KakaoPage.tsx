import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store";

const KakaoPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    console.log(url.get("code"));
    const getToken = async () => {
      try {
        const res = await axios.post("http://43.201.23.120:5173/auth/kakao", {
          code: url.get("code"),
        });

        console.log(res.data);
        if (!res.data.registered)
          navigate("/signup/email", { state: res.data });
        else {
          login(res.data.nickname);
          navigate("/");
        }
      } catch {
        return;
      }
    };
    if (url.get("code")) getToken();
  }, [location.search, navigate]);
  return <>로그인 중</>;
};

export default KakaoPage;
