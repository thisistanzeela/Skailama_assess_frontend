import React from "react";
import "./PodCard.css";

const fetchData = [
  {
    title: "RSS Feed",
    description: "Lorem ipsum dolor sit.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Generic_Feed-icon.svg/1024px-Generic_Feed-icon.svg.png",
  },
  {
    title: "YouTube Video",
    description: "Lorem ipsum dolor sit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEjIsQcn8NwYWhwISL74xXLGtRHeW1Mn67g&s",
  },
  {
    title: "Upload Files",
    description: "Lorem ipsum dolor sit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFB-u9qQxpD7wjNvuoXn3BVCWSPRgaIA-4w&s",
  },
];

function PodcastOptions() {
  return (
    <div className="card-container">
      {fetchData.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <div className="card-text">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
            <img src={item.img} alt={item.title} className="card-image" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PodcastOptions;
