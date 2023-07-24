import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function Main() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
