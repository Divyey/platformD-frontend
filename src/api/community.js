export async function getCommunities() {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/communities`);
    if (!res.ok) throw new Error("Failed to fetch communities");
    return res.json();
  }
  
  export async function createCommunity(data) {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/communities`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create community");
    return res.json();
  }
  