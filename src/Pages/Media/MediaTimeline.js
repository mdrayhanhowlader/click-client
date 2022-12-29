import { useQuery } from "@tanstack/react-query";
import React from "react";
import MediaCard from "./MediaCard";

const MediaTimeline = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/posts");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        {posts?.map((post) => (
          <MediaCard post={post}></MediaCard>
        ))}
      </div>
    </div>
  );
};

export default MediaTimeline;
