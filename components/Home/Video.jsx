import React from "react";

export default function Video() {
  return (
    <div className="py-8">
      <iframe
        src="https://www.youtube.com/embed/GdGHvWYl7CU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowfullscreen
        className="w-full md:w-8/12 aspect-video m-auto"
      ></iframe>
    </div>
  );
}
