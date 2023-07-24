import React from "react";
import { Box } from "@mui/system";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "../App.css";

export default function Sidebar() {
  return (
    <div className="fixed top-16">
      <div className="hidden tablet:block w-[70px] h-[91vh]">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
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
              <HomeOutlinedIcon sx={{ fontSize: "24px" }} />
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
    </div>
  );
}
