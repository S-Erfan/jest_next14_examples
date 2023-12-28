import React, { FC } from "react";
import AvatarUser from "./AvatarUser";

interface IProps {
  titleNavbar?: string;
}

const NavbarFixed: FC<IProps> = ({ titleNavbar = "Todo List" }) => {
  return (
    <header className="border-b shadow-lg bg-emerald-900 ">
      <nav className="container py-3 flex justify-between items-center">
        <h3 className="text-white text-2xl">{titleNavbar}</h3>
        <div className="flex flex-row-reverse gap-4">
          <AvatarUser />
        </div>
      </nav>
    </header>
  );
};

export default NavbarFixed;
