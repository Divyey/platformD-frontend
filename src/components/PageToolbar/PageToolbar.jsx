import "./PageToolbar.css";

export default function PageToolbar() {
  return (
    <div className="page-toolbar">
      <div className="toolbar-search-group">
        <input
          className="toolbar-search"
          placeholder="Event, city, genre ..."
        />
        <button className="toolbar-search-btn" aria-label="Search">
          🔍
        </button>
      </div>
      <button className="toolbar-btn">Filter ⚙️▼</button>
      <button className="toolbar-btn">Map 🗺️</button>
      <button className="toolbar-btn">Trending #</button>
    </div>
  );
}
