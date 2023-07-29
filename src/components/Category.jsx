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
    <div className="fixed top-[3.7rem] z-30 bg-[#0f0f0f] pb-3 pt-1 w-screen">
      <Box className="btn-group" sx={{ display: "flex" }}>
        {categories.map((item) => {
          return (
            <Button
              style={{
                background: item === "All" ? "#ffffff" : "#272727",
                color: item === "All" && "#000000",
              }}
              className="rounded-lg py-1 px-0"
              sx={{ mx: "8px", color: "white", textTransform: "unset" }}
            >
              {item}
            </Button>
          );
        })}
      </Box>
    </div>
  );
}
