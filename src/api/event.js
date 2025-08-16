export async function createEvent(data) {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create event");
    return res.json();
  }
  