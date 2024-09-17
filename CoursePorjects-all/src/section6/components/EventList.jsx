import React, { useEffect, useState } from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);

  // Fetch events from API
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Delete event
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/events/${id}`, {
        method: "DELETE",
      });
      setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gradient text-center">
        Event List
      </h1>
      <ul className="space-y-6">
        {events.map((event) => (
          <li key={event.id} className="card">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {new Date(event.date).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => handleDelete(event.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
