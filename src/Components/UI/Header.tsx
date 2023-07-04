import { shallow } from "zustand/shallow";
import { useAuthStore } from "../../store";
import { Link } from "react-router-dom";
import LoginForm from "../Login/LoginForm";

const Header: React.FC = () => {
  const [user, openLoginForm, logout] = useAuthStore(
    (state) => [state.user, state.openLoginForm, state.logout],
    shallow
  );

  return (
    <div className="w-[100%] text-right px-[20px] py-[10px] border-b-[1px] border-b-black">
      <LoginForm />
      {user === null ? (
        <>
          <button onClick={() => openLoginForm()} className="mx-5">
            로그인
          </button>
          <Link to="/signup" className="mx-5">
            회원가입
          </Link>
        </>
      ) : (
        <>
          <span className="mx-5">{user}</span>
          <button className="mx-5" onClick={logout}>
            로그아웃
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
