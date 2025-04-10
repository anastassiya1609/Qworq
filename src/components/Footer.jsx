import React from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pb-12">

        <div className=" pt-8 text-center text-gray-400">
        <span className="text-xl font-bold">Qworq</span>
          <p>© {currentYear} AllRent. Все права защищены.</p>
        </div>
    </footer>
  );
};

export default Footer; 