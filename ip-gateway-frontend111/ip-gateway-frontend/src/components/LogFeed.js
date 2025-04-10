import React from 'react';

function LogFeed() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">🧾 Live Log Feed</h2>
      <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto h-40">
[2025-04-10T16:50:02.512Z] 📥 Received UDP packet from 127.0.0.1:55123
[2025-04-10T16:50:02.513Z] ✅ Packet passed QoS checks
[2025-04-10T16:50:02.514Z] 🎧 Simulated Voice Codec: SGVsbG8gZnJvbSBTRFI=
[2025-04-10T16:50:02.514Z] 🔐 Encrypted Payload: <pre>
  {logs.map((log, idx) => (
    <div key={idx}>{log}</div>
  ))}
</pre>
[2025-04-10T16:50:02.515Z] 📤 Successfully sent to SDR-B over TCP
      </pre>
    </div>
  );
}

export default LogFeed;