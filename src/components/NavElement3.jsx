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
      <div className="flex items-center my-[12px] mr-4 tablet:w-[160px] justify-between">
        <div className="hidden tablet:block">
          <VideoCallOutlinedIcon sx={{ fontSize: "28px" }} />
        </div>
        <div className="hidden tablet:block">
          <Badge badgeContent={"4+"} color="error">
            <NotificationsNoneOutlinedIcon sx={{ fontSize: "28px" }} />
          </Badge>
        </div>
        <div className="p-2 mx-2 rounded-full hover:bg-[#222222] cursor-pointer block tablet:hidden">
          <SearchOutlinedIcon className="" sx={{ color: "white" }} />
        </div>
        <div>
          <Avatar sx={{ bgcolor: pink[500] }} />
        </div>
      </div>
    </div>
  );
}
