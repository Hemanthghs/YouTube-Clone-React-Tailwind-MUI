import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Input } from "@mui/base";
import { TextField, IconButton } from "@mui/material";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";

export default function NavElement2() {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <div className="flex items-center">
        <div className="hidden tablet:flex bg-[#121212] mx-2 my-[8px] align-middle pl-[12px] border-[1px] border-[#2a2a2a] rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="w-[100px] bg-[#121212] pl-[2px] my-[2px] focus:outline-none  placeholder-[#7a7a7a]  tablet:w-[150px] lg:w-[524px]"
          />
          <div className="bg-[#222222] px-3 rounded-r-full border-l-[1px]  border-[#2a2a2a]">
            <IconButton>
              <SearchOutlinedIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
        <div className="p-2 my-[8px] mx-2 bg-[#222222] rounded-full hover:bg-[#383838] cursor-pointer hidden tablet:block">
          <MicOutlinedIcon color="white" />
        </div>
      </div>
    </div>
  );
}
