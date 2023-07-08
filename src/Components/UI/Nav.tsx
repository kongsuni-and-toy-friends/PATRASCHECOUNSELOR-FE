import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../../store";

const Nav: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <div className="h-[90px] flex justify-around items-center border-b-[1px] border-black">
      <Link to="/" className="font-semibold text-4xl">
        파트라슈
      </Link>
      {user !== null && (
        <div>
          <NavLink
            to="prove"
            className={({ isActive }) => {
              if (isActive) return "font-bold";
            }}
          >
            자격 증명
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
