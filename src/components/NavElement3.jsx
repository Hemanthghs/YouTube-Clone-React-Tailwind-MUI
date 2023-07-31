import React from "react";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar } from "@mui/material";
import { pink, red } from "@mui/material/colors";
import { Badge } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function NavElement3() {
  const redColor = red[500];
  return (
    <div>
      <div className="flex items-center my-[12px] mr-4 tablet:w-[140px] justify-between">
        <div className="hidden tablet:block hover:cursor-pointer p-[6px] rounded-full hover:bg-[#222222]">
          <div className="fill-white">
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
              <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
            </svg>
          </div>
        </div>
        <div className="hidden tablet:block hover:cursor-pointer">
          <Badge badgeContent={"4+"} color="error">
            <div className="fill-white hover:cursor-pointer">
              <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
                <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
              </svg>
            </div>
          </Badge>
        </div>
        <div className="p-2 mx-2 rounded-full hover:bg-[#222222] cursor-pointer block tablet:hidden">
          <div className="fill-white">
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
              <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
            </svg>
          </div>
        </div>
        <div className="hover:cursor-pointer">
          <span className="hidden tablet:block">
            <Avatar
              sx={{ bgcolor: pink[500], height: "32px", width: "32px" }}
            />
          </span>
          <span className="block tablet:hidden">
            <Avatar
              sx={{ bgcolor: pink[500], height: "26px", width: "26px" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
