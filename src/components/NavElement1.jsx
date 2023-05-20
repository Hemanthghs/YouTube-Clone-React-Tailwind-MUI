import React from "react";
import youtube_icon from "../assets/youtube_icon.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box } from "@mui/system";

export default function NavElement1() {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <div className="ml-[11px] mr-[12px] my-[10px] p-[4px] hover:cursor-pointer hover:bg-[#222222] rounded-full">
          <MenuOutlinedIcon />
        </div>
        <img
          className="w-[91px] h-[21px] mx-[12px] my-[10px] hover:cursor-pointer"
          src={youtube_icon}
        />
      </Box>
    </div>
  );
}
