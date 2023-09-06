import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center px-4 py-8">
      <div className="content-width h-full flex flex-row grow items-center gap-2">
        <Image src="/fontier-icon.svg" alt="Logo" width={50} height={50} />
        <div className="font-space-grotesk font-extralight text-xl">Fontier</div>
        <div className="grow"/>
      </div>
    </div>
  )
}

export default NavBar
