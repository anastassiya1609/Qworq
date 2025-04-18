import { UserCircle2 } from "lucide-react";
import { Link  } from "react-router-dom";
import {   useSelector } from "react-redux";
import { useLogout } from "../../../hooks/useLogout";

export function DesktopMenu({ handleHostClick }) {

  const logout = useLogout();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  return (
    <div className="hidden md:flex items-center space-x-6">
      <button
        className="text-white hover:text-white/80 transition-colors"
        onClick={handleHostClick}
      >
        Разместить помещение
      </button>
      {isLoggedIn ? (
        <>
          <Link
            to="/profile"
            className="text-white hover:text-white/80 transition-colors"
          >
            <UserCircle2 className="w-8 h-8" />
          </Link>
          <button
            className="text-white hover:text-white/80 transition-colors"
            onClick={logout}
          >
            Выйти
          </button>
        </>
      ) : (
        <Link
          to="/auth"
          className="bg-white text-gray-900 px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          Войти
        </Link>
      )}
    </div>
  );
}
