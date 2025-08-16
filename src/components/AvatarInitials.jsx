export default function AvatarInitials({ name }) {
    const initials = name
      ? name.split(" ").map(n => n[0]).join("").toUpperCase()
      : "?";
    return (
      <div className="profile-placeholder">{initials}</div>
    );
  }
  