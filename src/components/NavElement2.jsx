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
              <div className="fill-white"><svg height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg></div>
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
