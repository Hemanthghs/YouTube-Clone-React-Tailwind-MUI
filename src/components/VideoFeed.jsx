import React from "react";
import VideoCard from "./VideoCard";
import { Grid } from "@mui/material";
import "./videofeed.css";
import { data } from "./Data";

export default function VideoFeed() {
  return (
    <div className="flex flex-wrap mt-32 items-center">
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {data.map((item) => {
          return (
            <Grid item className="tablet:mb-6">
              <VideoCard data={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
