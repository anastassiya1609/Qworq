import { UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DesktopMenu({ isLoggedIn, handleHostClick }) {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <button
        className="text-white hover:text-white/80 transition-colors"
        onClick={handleHostClick}
      >
        Разместить помещение
      </button>
      {isLoggedIn ? (
        <Link to="/profile" className="text-white hover:text-white/80 transition-colors">
          <UserCircle2 className="w-8 h-8" />  {/*Через редакс надо достать значение залогинен или нет, чтобы иконку менять */}
        </Link>
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
