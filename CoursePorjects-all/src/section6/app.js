import React, { useState } from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';

function App() {
  const [refresh, setRefresh] = useState(false);

  // Function to trigger refresh of event list
  const handleEventAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App bg-gray-100 min-h-screen">
      <EventForm onEventAdded={handleEventAdded} />
      <EventList key={refresh} />
    </div>
  );
}

export default App;
