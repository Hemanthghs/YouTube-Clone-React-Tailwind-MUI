import React from "react";
import youtube_icon from "../assets/youtube_icon.png";
import { Box } from "@mui/system";
import { Badge } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 4,
    top: 11,
  },
}));

const BadgeContent = () => {
  return (
    <div className="hidden tablet:block text-[#a2a2a2] text-[10px]">IN</div>
  )
}

export default function NavElement1() {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <div className="hidden tablet:block ml-[12px] mr-[12px] mb-[10px] mt-[12px] p-[4px] hover:cursor-pointer hover:bg-[#222222] rounded-full">
          <div className="fill-white">
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
              <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
            </svg>
          </div>
        </div>
        <StyledBadge badgeContent={<BadgeContent />} sx={{bottom: -2}}>
          <img
            className="my-[20px] w-[91.5px] h-[21.5px] mx-[10px] tablet:my-[10px] hover:cursor-pointer"
            src={youtube_icon}
          />
        </StyledBadge>
      </Box>
    </div>
  );
}
