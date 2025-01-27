import React from "react";
import ElementSidebar from "./sidebarComponents/ElementSidebar";
import PostAddIcon from "@mui/icons-material/PostAdd";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import InsightsIcon from "@mui/icons-material/Insights";
import BadgeIcon from "@mui/icons-material/Badge";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Schedule } from "@mui/icons-material";
import { Button } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import TuneIcon from "@mui/icons-material/Tune";
import LanguageIcon from "@mui/icons-material/Language";
import "./sidebar.css";
import UsageCard from "../UsageCard/UsageCard";

function Sidebar() {
  const upperData = [
    { name: "Post Generator", link: "/post-generator", icon: <PostAddIcon /> },
    {
      name: "Ideas Generator",
      link: "/ideas-generator",
      icon: <TipsAndUpdatesIcon />,
    },
    {
      name: "Carousel Maker",
      link: "/carousel-maker",
      icon: <ViewCarouselIcon />,
    },
    { name: "Posts", link: "/posts", icon: <DynamicFeedIcon /> },
    {
      name: "Content Inspiration",
      link: "/content-inspiration",
      icon: <InsightsIcon />,
    },
    { name: "Post For You", link: "/post-for-you", icon: <BadgeIcon /> },
    { name: "Schedule", link: "/schedule", icon: <Schedule /> },
  ];

  const lowerData = [
    { name: "Preferences", url: "/preferences", icon: <TuneIcon /> },
    {
      name: "Feature Request",
      url: "/feature-request",
      icon: <LanguageIcon />,
    },
  ];

  return (
    <div className="sidebar_container">
      <div className="button_container">
        <button className="write_post_button">
          <EditNoteIcon />
          Write Post
        </button>
      </div>

      <div className="sidebar_wrapper">
        <div className="upper_sidebar">
          {upperData.map((el) => (
            <ElementSidebar key={el.link} data={el} />
          ))}
        </div>
        <div className="lower_sidebar">
          {lowerData.map((el) => (
            <ElementSidebar key={el.link} data={el} />
          ))}
          <UsageCard />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
