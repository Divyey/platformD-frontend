import "./Stories.css";

export default function Stories() {
  // Optional: Sample static data
  const users = [
    { name: "Priya", avatar: "/avatar.png" },
    { name: "Ravi", avatar: "/avatar.png" },
    { name: "Shruti", avatar: "/avatar.png" },
    { name: "Raj", avatar: "/avatar.png" },
    { name: "Sam", avatar: "/avatar.png" },
  ];
  return (
    <div className="stories-bar">
      {users.map((user, i) => (
        <div key={i} className="story">
          <img src={user.avatar} alt={user.name} className="story-avatar" />
          <span className="story-name">{user.name}</span>
        </div>
      ))}
    </div>
  );
}
