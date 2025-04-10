import React from 'react';

function Dashboard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">📊 Stats Dashboard</h2>
      <ul className="list-disc ml-5">
        <li>Total Packets Received: 120</li>
        <li>Dropped Packets (QoS): 10</li>
        <li>Packets Sent: 110</li>
        <li>Average Delay Introduced: 120ms</li>
      </ul>
    </div>
  );
}

export default Dashboard;