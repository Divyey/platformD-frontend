import React from "react";
import "./Home.css";
import PageToolbar from "../components/PageToolbar/PageToolbar";
import Stories from "../components/Stories/Stories";
import EventSlider from "../components/EventSlider/EventSlider";
import EventCard from "../components/EventCard/EventCard";

export default function Home() {
  // Sample event data — replace with API events soon!
  const featuredEvent = {
    image:
      "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?fit=crop&w=600&q=80",
    name: "Startup Mixers Night",
    description: "Network with founders in a casual setting!",
    location: "The Hive, Bangalore",
    organiser: "TechCrossroads",
    date: "2025-08-22",
    time: "18:30",
  };

  return (
    <div className="home-root">
      {/* Toolbar: Search, Filter, Map, Trending */}
      <PageToolbar />

      {/* Stories bar */}
      <Stories />

      {/* Highlight Events Slider */}
      <EventSlider />

      {/* Featured Event (big card) */}
      <div className="home-featured">
        <EventCard event={featuredEvent} featured />
      </div>

      {/* Can map multiple event cards in grid below if needed */}
      {/* ... */}
    </div>
  );
}
