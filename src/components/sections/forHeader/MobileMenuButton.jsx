import { Menu, X } from 'lucide-react';

export function MobileMenuButton({ isMobileMenuOpen, toggleMenu }) {
  return (
    <button
      className="md:hidden relative z-20 text-white p-2"
      onClick={toggleMenu}
    >
      {isMobileMenuOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </button>
  );
}
