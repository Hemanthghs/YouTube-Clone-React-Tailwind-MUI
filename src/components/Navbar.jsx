import React from "react";
import NavElement1 from "./NavElement1";
import NavElement2 from "./NavElement2";
import NavElement3 from "./NavElement3";

export default function Navbar() {
  return (
    <div>
      <div
        className=" flex justify-between px-[8px]"
      >
        <NavElement1 />
        <NavElement2 />
        <NavElement3 />
      </div>
    </div>
  );
}
