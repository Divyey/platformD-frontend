import React from 'react';
import './OrganizerDashboard.css';

export default function OrganizerDashboard() {
  const events = [
    { id: 1, name: 'Salsa Night Paris', rsvps: 18, revenue: 955 },
    { id: 2, name: 'Zouk Berlin', rsvps: 44, revenue: 2110 },
  ];

  return (
    <div className="dashboard-root">
      <header className="dashboard-header">
        <h1>Organizer Dashboard</h1>
        <button className="btn-primary create-event-btn">+ Create Event</button>
      </header>

      <section className="my-events-section">
        <h2>My Events</h2>
        <button className="btn-secondary create-event-btn-inline">+ Create Event</button>

        <ul className="events-list">
          {events.map(event => (
            <li key={event.id} className="event-row">
              <div className="event-info">
                <span className="event-name">{event.name}</span> &mdash; 
                <span className="event-rsvps">{event.rsvps} RSVPs</span> | 
                <span className="event-revenue">${event.revenue}</span>
              </div>
              <div className="event-actions">
                <button title="Edit" className="icon-btn">✏️</button>
                <button title="Stats" className="icon-btn">📊</button>
                <button title="Share" className="icon-btn">🔗</button>
                <button title="Attendees" className="icon-btn">👥</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="pinned-announcements">
        <h2>Pinned Announcements / Stories</h2>
        <p>No announcements yet.</p>
      </section>

      <section className="affiliate-links">
        <h2>Affiliate Links</h2>
        <div className="affiliate-controls">
          <button className="btn-secondary">Copy Referral 🔗</button>
          <button className="btn-secondary">View Stats 📊</button>
        </div>
      </section>
    </div>
  );
}
// 
// import React from 'react';

// export default function OrganizerDashboard() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>Organizer Dashboard</h1>
//       <p>This is a placeholder for the organizer dashboard page.</p>
//     </div>
//   );
// }
