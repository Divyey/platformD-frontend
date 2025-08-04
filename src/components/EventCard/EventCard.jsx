import "./EventCard.css";

export default function EventCard({ event, featured }) {
  return (
    <div className={featured ? "event-card featured" : "event-card"}>
      <div className="event-card-img-wrap">
        <img src={event.image} alt={event.name} className="event-card-img" />
      </div>
      <div className="event-card-body">
        <h2 className="event-card-title">{event.name}</h2>
        <div className="event-card-desc">{event.description}</div>
        <div className="event-card-meta">
          <span>{event.location}</span> | <span>{event.organiser}</span> |{" "}
          <span>
            {event.date}, {event.time}
          </span>
        </div>
        <div className="event-card-actions">
          <button className="rsvp-btn">RSVP</button>
          <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  );
}
