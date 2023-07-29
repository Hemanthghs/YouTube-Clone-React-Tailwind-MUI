import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import "./category.css";

export default function Category() {
  const categories = [
    "All",
    "Music",
    "Movies",
    "Series",
    "News",
    "Cricket",
    "Tech",
    "Politics",
    "Current",
    "General",
    "India",
    "Delhi",
    "Sports",
    "World",
    "US",
    "China",
    "UK",
    "Japan",
    "Business",
    "Shopping",
    "Russia",
    "Elections",
  ];
  return (
    <div className="pl-6 fixed top-[3.7rem] z-30 bg-[#0f0f0f] pb-0 pt-1 w-screen">
      <Box className="btn-group" sx={{ display: "flex" }}>
        {categories.map((item, index) => {
          return (
            <span
            key={index}
              style={{
                background: item === "All" ? "#ffffff" : "#272727",
                color: item === "All" && "#000000",
              }}
              className="rounded-lg py-[6px] px-3 m-3 ml-0 text-sm hover:cursor-pointer"
              sx={{ mx: "8px", color: "white", textTransform: "unset" }}
            >
              {item}
            </span>
          );
        })}
      </Box>
    </div>
  );
}
