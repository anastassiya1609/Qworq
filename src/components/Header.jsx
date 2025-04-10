import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalForLandlord from "../sections/forModalsWindows/ModalForLandlord";
import { MobileMenuButton } from "../sections/forHeader/MobileMenuButton";
import { DesktopMenu } from "../sections/forHeader/DesktopMenu";
import { MobileMenuComponent } from "../sections/forHeader/MobileMenuComponent";

export function Header() {
  const [isModalForLandlordOpen, setIsModalForLandlordOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleHostClick = () => {
    setIsModalForLandlordOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-20"  style={{ backgroundColor: '#00000045' }}>
        <nav className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-white text-2xl font-bold relative z-20"
            >
              Qworq
            </Link>

            <MobileMenuButton
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />

            <DesktopMenu
              isLoggedIn={isLoggedIn}
              handleHostClick={handleHostClick}
            />
          </div>
        </nav>
      </header>

      <ModalForLandlord
        isOpen={isModalForLandlordOpen}
        onClose={() => setIsModalForLandlordOpen(false)}
      />

      <MobileMenuComponent
        isLoggedIn={isLoggedIn}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMenu={setIsMobileMenuOpen}
        handleHostClick={handleHostClick}
      />
    </>
  );
}