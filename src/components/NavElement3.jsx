import React from "react";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar } from "@mui/material";
import { pink, red } from "@mui/material/colors";
import { Badge } from "@mui/material";

export default function NavElement3() {
  const redColor = red[500];
  return (
    <div>
      <div className="flex items-center my-[12px] mr-4 w-[160px] justify-between">
        <div>
          <VideoCallOutlinedIcon sx={{ fontSize: "28px" }} />
        </div>
        <div>
          <Badge badgeContent={"4+"} color="error">
            <NotificationsNoneOutlinedIcon sx={{ fontSize: "28px" }} />
          </Badge>
        </div>
        <div>
          <Avatar sx={{ bgcolor: pink[500] }} />
        </div>
      </div>
    </div>
  );
}
