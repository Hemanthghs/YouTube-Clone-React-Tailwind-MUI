import React from "react";
import Sidebar, { Options } from "./Sidebar";
import Content from "./Content";
import { Box } from "@mui/material";
import Shorts from "./Shorts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/shorts" element={<Shorts />} />
        </Routes>
      </div>
      <Box className="bg-[#0f0f0f] border-t-[1px] border-[#414141] w-full fixed bottom-0 flex items-center justify-around tablet:hidden">
        <Options />
      </Box>
    </div>
  );
}
