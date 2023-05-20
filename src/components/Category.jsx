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
    "Shopping",
    "Sports",
    "World",
    "Business",
    "US",
    "UK",
    "China",
    "Russia",
    "Japan",
    "Elections",
  ];
  return (
    <div>
      <Box className="btn-group" sx={{ display: "flex" }}>
        {categories.map((item) => {
          return (
            <Button
              style={{
                background: item === "All" ? "#ffffff" : "#272727",
                color: item === "All" && "#000000",
              }}
              className="hover:bg-[#414141] rounded-lg py-1 px-0"
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
