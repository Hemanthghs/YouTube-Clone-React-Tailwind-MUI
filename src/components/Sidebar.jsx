import React from "react";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

export default function Sidebar() {
  return (
    <div className="w-[70px] h-[91vh]">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          className="hover: cursor-pointer"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: "16px",
          }}
        >
          <Box>
            <HomeIcon sx={{ fontSize: "24px" }} />
          </Box>
          <Box sx={{ fontSize: "10px" }}>Home</Box>
        </Box>
        <Box
          className="hover: cursor-pointer"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: "16px",
          }}
        >
          <Box>
            <ThumbUpOutlinedIcon sx={{ fontSize: "24px" }} />
          </Box>
          <Box sx={{ fontSize: "10px" }}>Liked</Box>
        </Box>
        <Box
          className="hover: cursor-pointer"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: "16px",
          }}
        >
          <Box>
            <SubscriptionsOutlinedIcon sx={{ fontSize: "24px" }} />
          </Box>
          <Box sx={{ fontSize: "10px" }}>Subscriptions</Box>
        </Box>
        <Box
          className="hover: cursor-pointer"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: "16px",
          }}
        >
          <Box>
            <VideoLibraryOutlinedIcon sx={{ fontSize: "24px" }} />
          </Box>
          <Box sx={{ fontSize: "10px" }}>Library</Box>
        </Box>
      </Box>
    </div>
  );
}
