import { UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import {   useSelector } from "react-redux";
import { useLogout } from "../../../hooks/useLogout";

export function MobileMenuComponent({
  isMobileMenuOpen,
  toggleMenu,
  handleHostClick,
}) {
  const logout = useLogout();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div
      className={`fixed inset-0 bg-black/95 z-10 md:hidden transition-opacity duration-300
        ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <button
          className="text-white text-xl hover:text-white/80 transition-colors"
          onClick={handleHostClick}
        >
          Разместить помещение
        </button>
        {isLoggedIn ? (
          <>
            <button
              className="text-white hover:text-white/80 transition-colors"
              onClick={() => toggleMenu(false)}
            >
              <UserCircle2 className="w-10 h-10" />
            </button>
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
            className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg"
            onClick={() => toggleMenu(false)}
          >
            Войти
          </Link>
        )}
      </div>
    </div>
  );
}
